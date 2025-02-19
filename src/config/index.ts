export const AXIOSURL = "http://192.168.130.15:10004"
export const AXIOSTIMEOUT = 60000
export const ADMINURL = "http://192.168.130.15:10002"
export const IMURL = "ws://192.168.130.15:10003"
export const PICMESSAGETHUMOPTION = "?imageView2/1/w/200/h/200/rq/80"
export const LANGUAGE = "zh-cn"

export const getIMUrl = () => localStorage.getItem("IMUrl") ? localStorage.getItem("IMUrl")! : IMURL
export const getAxiosUrl = () => localStorage.getItem("IMAxiosUrl") ? localStorage.getItem("IMAxiosUrl")! : AXIOSURL
export const getAdminUrl = () => localStorage.getItem("IMAdminUrl") ? localStorage.getItem("IMAdminUrl")! : ADMINURL
export const getLanguage = () => localStorage.getItem("IMLanguage") ? localStorage.getItem("IMLanguage")! : LANGUAGE
