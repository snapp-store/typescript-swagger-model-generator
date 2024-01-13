/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddCustomerGroupMemberCommand {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int64 */
  customerId?: number;
}

export interface CalculateSmsAmountCommand {
  message?: string | null;
  phoneNumbers?: string[] | null;
}

export interface CommandResponse {
  /** @format date-time */
  responseTime?: string;
}

export interface CreateCustomerCommand {
  phoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format date-time */
  birthDate?: string | null;
  /** @format date-time */
  dateOfMarriage?: string | null;
  gender?: Gender;
  /** @format double */
  purchaseAmount?: number;
}

export interface CreateCustomerGroupCommand {
  name?: string | null;
  description?: string | null;
}

export interface CreateCustomerPurchaseCommand {
  /** @format int64 */
  customerId?: number;
  /** @format double */
  amount?: number;
}

export interface CustomerDto {
  /** @format int64 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  birthDate?: string | null;
  /** @format date-time */
  dateOfMarriage?: string | null;
  gender?: Gender;
}

export interface CustomerDtoPageFilterResponse {
  /** @format int32 */
  count?: number;
  result?: CustomerDto[] | null;
}

export interface CustomerGroupDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationTime?: string;
  name?: string | null;
  description?: string | null;
}

export interface CustomerGroupDtoPageFilterResponse {
  /** @format int32 */
  count?: number;
  result?: CustomerGroupDto[] | null;
}

export interface CustomerInfoDto {
  /** @format int64 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  /** @format date-time */
  creationTime?: string;
  gender?: Gender;
  /** @format int32 */
  purchaseCount?: number;
  /** @format double */
  sumPurchaseAmount?: number;
}

export interface FailedResponse {
  message?: string | null;
}

/** @format int32 */
export enum Gender {
  Value0 = 0,
  Value1 = 1,
}

export interface ICustomerDto {
  /** @format int64 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  birthDate?: string | null;
  /** @format date-time */
  dateOfMarriage?: string | null;
  gender?: Gender;
}

export interface ICustomerDtoPageFilterResponse {
  /** @format int32 */
  count?: number;
  result?: ICustomerDto[] | null;
}

export interface ILocationDto {
  /** @format double */
  lat?: number;
  /** @format double */
  lon?: number;
}

export interface IMerchantDto {
  /** @format int32 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  merchantType?: IMerchantTypeDto;
  location?: ILocationDto;
  address?: string | null;
}

export interface IMerchantTypeDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
}

export interface LocationCommand {
  /** @format double */
  lat?: number;
  /** @format double */
  lon?: number;
}

export interface RejectSmsRequestCommand {
  /** @format int64 */
  id?: number;
  description?: string | null;
}

export interface RemoveCustomerMemberCommand {
  /** @format int32 */
  customerGroupId?: number;
  /** @format int64 */
  customerId?: number;
}

export interface SendSmsRequestCommand {
  message?: string | null;
  phoneNumbers?: string[] | null;
}

export interface SmsRequestDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  creationTime?: string;
  sendToAll?: boolean;
  /** @format double */
  sumAmount?: number;
  status?: SmsRequestStatus;
  statusDescription?: string | null;
  /** @format int32 */
  itemsCount?: number;
}

export interface SmsRequestDtoPageFilterResponse {
  /** @format int32 */
  count?: number;
  result?: SmsRequestDto[] | null;
}

/** @format int32 */
export enum SmsRequestStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface SmsTemplateDto {
  title?: string | null;
  text?: string | null;
}

export interface UpdateMerchantInfoCommand {
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  location?: LocationCommand;
  /** @format int32 */
  merchantTypeId?: number | null;
}

export interface SignInOtpCommand {
  phoneNumber?: string | null;
}

export interface SignUpCommand {
  phoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface TokenModel {
  accessToken?: string | null;
  /** @format date-time */
  expirationDate?: string;
  roles?: string[] | null;
}

export interface VerifyOtpCommand {
  phoneNumber?: string | null;
  otpCode?: string | null;
}

/** @format int32 */
export enum BankGateway {
  Value1 = 1,
}

export interface CreateTransactionCreditCommand {
  /** @format double */
  amount?: number;
  bankGateway?: BankGateway;
}

export interface ISmsWalletBalanceDto {
  /** @format int32 */
  count?: number;
}

export interface ITransactionBaseDto {
  /** @format int64 */
  id?: number;
  /** @format double */
  amount?: number;
  /** @format date-time */
  creationTime?: string;
  transactionType?: TransactionType;
  status?: TransactionStatus;
  description?: string | null;
}

export interface ITransactionBaseDtoPageFilterResponse {
  /** @format int32 */
  count?: number;
  result?: ITransactionBaseDto[] | null;
}

export interface ITransactionCreditDto {
  bankGateway?: BankGateway;
  /** @format int64 */
  id?: number;
  /** @format double */
  amount?: number;
  /** @format date-time */
  creationTime?: string;
  transactionType?: TransactionType;
  status?: TransactionStatus;
  description?: string | null;
}

export interface IWalletBalanceDto {
  /** @format double */
  amount?: number;
}

export interface TransactionCreditResponse {
  /** @format date-time */
  responseTime?: string;
  redirectUrl?: string | null;
}

/** @format int32 */
export enum TransactionStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum TransactionType {
  Value1 = 1,
  Value2 = 2,
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Main
 * @version v1
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  gateway = {
    /**
     * No description
     *
     * @tags Customer
     * @name MainCustomerCreate
     * @request POST:/gateway/main/Customer
     * @secure
     */
    mainCustomerCreate: (
      data: CreateCustomerCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/Customer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name MainCustomerList
     * @request GET:/gateway/main/Customer
     * @secure
     */
    mainCustomerList: (
      query?: {
        Term?: string;
        /** @format int32 */
        Count?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ICustomerDtoPageFilterResponse, FailedResponse>({
        path: `/gateway/main/Customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name MainCustomerInfoList
     * @request GET:/gateway/main/Customer/Info
     * @secure
     */
    mainCustomerInfoList: (
      query?: {
        phoneNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerInfoDto, FailedResponse>({
        path: `/gateway/main/Customer/Info`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name MainCustomerInfoDetail
     * @request GET:/gateway/main/Customer/Info/{id}
     * @secure
     */
    mainCustomerInfoDetail: (id: number, params: RequestParams = {}) =>
      this.request<CustomerInfoDto, FailedResponse>({
        path: `/gateway/main/Customer/Info/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerGroup
     * @name MainCustomerGroupList
     * @request GET:/gateway/main/CustomerGroup
     * @secure
     */
    mainCustomerGroupList: (
      query?: {
        /** @format int32 */
        Count?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerGroupDtoPageFilterResponse, FailedResponse>({
        path: `/gateway/main/CustomerGroup`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerGroup
     * @name MainCustomerGroupCreate
     * @request POST:/gateway/main/CustomerGroup
     * @secure
     */
    mainCustomerGroupCreate: (
      data: CreateCustomerGroupCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/CustomerGroup`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerGroup
     * @name MainCustomerGroupMemberCreate
     * @request POST:/gateway/main/CustomerGroup/Member
     * @secure
     */
    mainCustomerGroupMemberCreate: (
      data: AddCustomerGroupMemberCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/CustomerGroup/Member`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerGroup
     * @name MainCustomerGroupMemberDelete
     * @request DELETE:/gateway/main/CustomerGroup/Member
     * @secure
     */
    mainCustomerGroupMemberDelete: (
      data: RemoveCustomerMemberCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/CustomerGroup/Member`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerGroup
     * @name MainCustomerGroupMembersDetail
     * @request GET:/gateway/main/CustomerGroup/{customerGroupId}/Members
     * @secure
     */
    mainCustomerGroupMembersDetail: (
      customerGroupId: number,
      query?: {
        /** @format int32 */
        Count?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerDtoPageFilterResponse, FailedResponse>({
        path: `/gateway/main/CustomerGroup/${customerGroupId}/Members`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerPurchase
     * @name MainCustomerPurchaseCreate
     * @request POST:/gateway/main/CustomerPurchase
     * @secure
     */
    mainCustomerPurchaseCreate: (
      data: CreateCustomerPurchaseCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/CustomerPurchase`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MainMerchantList
     * @request GET:/gateway/main/Merchant
     * @secure
     */
    mainMerchantList: (params: RequestParams = {}) =>
      this.request<IMerchantDto, FailedResponse>({
        path: `/gateway/main/Merchant`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MainMerchantUpdate
     * @request PUT:/gateway/main/Merchant
     * @secure
     */
    mainMerchantUpdate: (
      data: UpdateMerchantInfoCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/Merchant`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MainMerchantCustomersCountList
     * @request GET:/gateway/main/Merchant/CustomersCount
     * @secure
     */
    mainMerchantCustomersCountList: (params: RequestParams = {}) =>
      this.request<Record<string, string>, FailedResponse>({
        path: `/gateway/main/Merchant/CustomersCount`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MainMerchantCustomersCountChartList
     * @request GET:/gateway/main/Merchant/CustomersCountChart
     * @secure
     */
    mainMerchantCustomersCountChartList: (
      query?: {
        /** @format date-time */
        from?: string;
        /** @format date-time */
        to?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Record<string, string>, FailedResponse>({
        path: `/gateway/main/Merchant/CustomersCountChart`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantType
     * @name MainMerchantTypeList
     * @request GET:/gateway/main/MerchantType
     * @secure
     */
    mainMerchantTypeList: (params: RequestParams = {}) =>
      this.request<IMerchantTypeDto[], FailedResponse>({
        path: `/gateway/main/MerchantType`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sms
     * @name MainSmsCalculateSmsAmountCreate
     * @request POST:/gateway/main/Sms/CalculateSmsAmount
     * @secure
     */
    mainSmsCalculateSmsAmountCreate: (
      data: CalculateSmsAmountCommand,
      params: RequestParams = {}
    ) =>
      this.request<number, FailedResponse>({
        path: `/gateway/main/Sms/CalculateSmsAmount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sms
     * @name MainSmsSendRequestList
     * @request GET:/gateway/main/Sms/SendRequest
     * @secure
     */
    mainSmsSendRequestList: (
      query?: {
        /** @format int32 */
        Count?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SmsRequestDtoPageFilterResponse, FailedResponse>({
        path: `/gateway/main/Sms/SendRequest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sms
     * @name MainSmsSendRequestCreate
     * @request POST:/gateway/main/Sms/SendRequest
     * @secure
     */
    mainSmsSendRequestCreate: (
      data: SendSmsRequestCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/Sms/SendRequest`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sms
     * @name MainSmsRejectSmsRequestCreate
     * @request POST:/gateway/main/Sms/RejectSmsRequest
     * @secure
     */
    mainSmsRejectSmsRequestCreate: (
      data: RejectSmsRequestCommand,
      params: RequestParams = {}
    ) =>
      this.request<CommandResponse, FailedResponse>({
        path: `/gateway/main/Sms/RejectSmsRequest`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsTemplate
     * @name MainSmsTemplateList
     * @request GET:/gateway/main/SmsTemplate
     * @secure
     */
    mainSmsTemplateList: (params: RequestParams = {}) =>
      this.request<SmsTemplateDto[], FailedResponse>({
        path: `/gateway/main/SmsTemplate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticate
     * @name AuthAuthenticateSignUpCreate
     * @request POST:/gateway/auth/Authenticate/SignUp
     * @secure
     */
    authAuthenticateSignUpCreate: (
      data: SignUpCommand,
      params: RequestParams = {}
    ) =>
      this.request<any, FailedResponse>({
        path: `/gateway/auth/Authenticate/SignUp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticate
     * @name AuthAuthenticateSignInOtpCreate
     * @request POST:/gateway/auth/Authenticate/SignInOtp
     * @secure
     */
    authAuthenticateSignInOtpCreate: (
      data: SignInOtpCommand,
      params: RequestParams = {}
    ) =>
      this.request<any, FailedResponse>({
        path: `/gateway/auth/Authenticate/SignInOtp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticate
     * @name AuthAuthenticateOtpTimeRemainingList
     * @request GET:/gateway/auth/Authenticate/OtpTimeRemaining
     * @secure
     */
    authAuthenticateOtpTimeRemainingList: (
      query?: {
        phoneNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<number, FailedResponse>({
        path: `/gateway/auth/Authenticate/OtpTimeRemaining`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticate
     * @name AuthAuthenticateVerifyOtpCreate
     * @request POST:/gateway/auth/Authenticate/VerifyOtp
     * @secure
     */
    authAuthenticateVerifyOtpCreate: (
      data: VerifyOtpCommand,
      params: RequestParams = {}
    ) =>
      this.request<TokenModel, FailedResponse>({
        path: `/gateway/auth/Authenticate/VerifyOtp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticate
     * @name AuthAuthenticateGetOtpCodeList
     * @request GET:/gateway/auth/Authenticate/GetOtpCode
     * @secure
     */
    authAuthenticateGetOtpCodeList: (
      query?: {
        phoneNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/gateway/auth/Authenticate/GetOtpCode`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Balance
     * @name WalletBalanceList
     * @request GET:/gateway/wallet/Balance
     * @secure
     */
    walletBalanceList: (params: RequestParams = {}) =>
      this.request<IWalletBalanceDto, FailedResponse>({
        path: `/gateway/wallet/Balance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Balance
     * @name WalletBalanceSmsList
     * @request GET:/gateway/wallet/Balance/Sms
     * @secure
     */
    walletBalanceSmsList: (params: RequestParams = {}) =>
      this.request<ISmsWalletBalanceDto, FailedResponse>({
        path: `/gateway/wallet/Balance/Sms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transaction
     * @name WalletTransactionList
     * @request GET:/gateway/wallet/Transaction
     * @secure
     */
    walletTransactionList: (
      query?: {
        /** @format int32 */
        Count?: number;
        /** @format int32 */
        Skip?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ITransactionBaseDtoPageFilterResponse, FailedResponse>({
        path: `/gateway/wallet/Transaction`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TransactionCredit
     * @name WalletTransactionCreditCreate
     * @request POST:/gateway/wallet/TransactionCredit
     * @secure
     */
    walletTransactionCreditCreate: (
      data: CreateTransactionCreditCommand,
      params: RequestParams = {}
    ) =>
      this.request<TransactionCreditResponse, FailedResponse>({
        path: `/gateway/wallet/TransactionCredit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TransactionCredit
     * @name WalletTransactionCreditList
     * @request GET:/gateway/wallet/TransactionCredit
     * @secure
     */
    walletTransactionCreditList: (
      query?: {
        /** @format int64 */
        id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ITransactionCreditDto, FailedResponse>({
        path: `/gateway/wallet/TransactionCredit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
