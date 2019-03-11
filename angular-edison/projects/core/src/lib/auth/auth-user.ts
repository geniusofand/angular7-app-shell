
export class AuthUser {

  // TODO - make this an Enum
  authServiceName = 'Firebase'; // 'OAuth', etc.
  authServiceUuid: string;
  personWeServeUuid: string;
  providerName: string;
  providerUuid: string;
  providerEmail: string;
  providerMobilePhoneNumber: string;
}
