import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api",
	headers: {
		Appid: "Q44WVBELNY4WNH2",
		Apikey: "b85d2378795b41c8b065e70885b8e6d620240712130944089298",
	},
});

export default axiosInstance;
