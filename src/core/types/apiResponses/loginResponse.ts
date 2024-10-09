export type LoginResponse = {
  success: boolean;
  access_token?: string;
  account_type?: string;
  businesspartner_id?: string;
  error?: string;
};

export type FilesResponse = {
  success: boolean;
  files: Array<any>;
};
export type FileDownloadResponse = {
  success: boolean;
  url: string;
};
