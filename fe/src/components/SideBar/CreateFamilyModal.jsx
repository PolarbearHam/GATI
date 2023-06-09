import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import httpClient from "../../utils/axios";
import { Button, Input, OutlinedInput } from "@mui/material";
import { FilePond } from "react-filepond";
import { useDispatch, useSelector } from "react-redux";

import { updateMainGroup } from "../../store/User/user";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 20,
};

const formStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  .img-box {
    margin: 10px;
    .circled-box {
      margin: 0 auto;
      width: 70%;
    }
  }
  .name-input {
    margin: 10px 0 10px 0;
  }
  .submit-btn {
    align-self: center;
    width: 50%;
  }
`;

const btnStyle = css`
  line-height: 5vh;
  width: 100%;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgba(168, 168, 168, 0.5);
  text-align: center;
`;

const CreateFamilyModal = (props) => {
  const open = props.open;
  const handleClose = () => props.setOpen(false);

  const [file, setFile] = React.useState(null);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user.loginUser);

  function handleSubmit(event) {
    event.preventDefault();

    if (file == null) alert("사진을 등록 해 주세요");
    else {
      const formData = new FormData();
      formData.append("name", event.target.familyName.value);
      formData.append("multipartFile", file[0].file, file[0].file.name);
      formData.append("userId", userId);

      // console.log(formData);
      httpClient
        .post(`/family/create`, formData)
        .then(({ data }) => {
          // console.log(data);
          if (data.msg === "success") {
            const createdFamily = data["created Family"];
            alert("가족 그룹이 생성되었습니다. " + createdFamily.name + " 으로 이동합니다.");
            dispatch(updateMainGroup(createdFamily));
            handleClose();
            if (props.setSideOpen != undefined) props.setSideOpen(false);
          }
        })
        .catch((error) => {
          alert("가족 그룹 생성에 실패하였습니다.\n 다시 시도해 주세요");
          console.log(error);
        });
    }
  }

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Box component="form" onSubmit={handleSubmit} css={formStyle}>
              <Box className="img-box">
                <FilePond
                  className="circled-box"
                  files={file}
                  onupdatefiles={setFile}
                  allowMultiple={false}
                  labelIdle="Upload your family image"
                  stylePanelLayout={"compact circle"}
                />
              </Box>
              <OutlinedInput
                required
                className="name-input"
                type="text"
                name="familyName"
                placeholder="가족 이름을 입력해 주세요"
              />
              <Button type="submit" variant="contained" className="submit-btn">
                생성
              </Button>
            </Box>
            <Box></Box>
            <Box css={btnStyle} onClick={handleClose}>
              취소
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default CreateFamilyModal;
