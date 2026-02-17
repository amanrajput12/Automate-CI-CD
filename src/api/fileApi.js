import { axiosWithCreds } from "./axiosInstances";

export const deleteFile = async (id) => {
  const { data } = await axiosWithCreds.delete(`/file/${id}`);
  return data;
};

export const renameFile = async (id, newFilename) => {
  const { data } = await axiosWithCreds.patch(`/file/${id}`, {
    newFilename,
  });
  return data;
};


export const uploadInitiate = async (fildata) => {
  const { data } = await axiosWithCreds.post(`/file/upload/initiate`, fildata);
  return data;
};


// create by me for s3 upload integration to tell server increase the limit of of total storage
export const uploadComplete = async (fileId) => {
  const { data } = await axiosWithCreds.post(`/file/upload/complete`, { fileId });
  return data;
};

