import axios, {
	AxiosRequestConfig,
	AxiosResponse,
	RawAxiosRequestHeaders,
} from "axios";

export default class Api {
	private static _instance: Api | null = null;

	private _basePath: string;
	private _authorization: string | null;

	public set authorization(value: string) {
		this._authorization = value;
	}

	private constructor(basePath: string, authorization: string | null) {
		this._basePath = basePath;
		this._authorization = authorization;
	}

	public static async getInstance() {
		if (!this._instance) {
			const basePath = import.meta.env.MODE === 'development'
				? '/api'
				: 'http://198.211.105.95:8080';  // URL directa en producción
			this._instance = new Api(basePath, null);
		}

		return this._instance;
	}

	public async request<RequestType, ResponseType>(config: AxiosRequestConfig) {
		const headers: RawAxiosRequestHeaders = {
			"Content-Type": "application/json",
			Authorization: this._authorization ? `Bearer ${this._authorization}` : "",
			...(config.headers || {}),
		};

		const configOptions: AxiosRequestConfig = {
			...config,
			baseURL: this._basePath,
			headers,
			method: config.method,
			data: config.data,
		};
		return axios<unknown, AxiosResponse<ResponseType>>(configOptions);
	}

	public get<RequestType, ResponseType>(config: AxiosRequestConfig) {
		const configOptions: AxiosRequestConfig = {
			...config,
			method: "GET",
		};

		return this.request<RequestType, ResponseType>(configOptions);
	}


	public async post<RequestBodyType, ResponseBodyType>(
		config: AxiosRequestConfig
	): Promise<AxiosResponse<ResponseBodyType>> {
		const requestConfig: AxiosRequestConfig = {
			...config,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...(this._authorization && {
					Authorization: `Bearer ${this._authorization}`
				}),
				...config.headers
			}
		};
		return this.request<ResponseBodyType>(requestConfig);
	}

	public delete(options: AxiosRequestConfig) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "DELETE",
		};

		return this.request<void, void>(configOptions);
	}

	public put<RequestBodyType, ResponseBodyType>(
		data: RequestBodyType,
		options: AxiosRequestConfig,
	) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "PUT",
			data: data,
		};

		return this.request<RequestBodyType, ResponseBodyType>(configOptions);
	}

	public patch<RequestBodyType, ResponseBodyType>(
		data: RequestBodyType,
		options: AxiosRequestConfig,
	) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "PATCH",
			data: data,
		};

		return this.request<RequestBodyType, ResponseBodyType>(configOptions);
	}
}
