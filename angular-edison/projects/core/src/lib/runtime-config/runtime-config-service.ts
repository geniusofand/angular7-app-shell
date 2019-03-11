import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LogMessage } from '../logging/log-message';
import { RuntimeConfig } from './runtime-config';

// TODO - research this and likely turn it into an INJECTABLE from the consuming app
// import { environment } from '../environments/environment';
const environment = {
  clientApplicationId: 'foo',
  clientApplicationKey: 'bar'
};

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {

  // TODO - put this behind our own geniusofand.com Domain
  private baseUrlForRuntimeConfigApi = 'https://us-central1-geniusofand.cloudfunctions.net/runtimeConfigServiceGetRuntimeConfigHttp';
  public runtimeConfig: RuntimeConfig;

  constructor(private httpClient: HttpClient) {
    this.setRuntimeConfig();
  }

  public async setRuntimeConfig(): Promise<void> {

    if (this.runtimeConfig) {
      return;
    } else {

      const httpPostBody = {
        clientApplicationId: environment.clientApplicationId,
        clientApplicationKey: environment.clientApplicationKey
      };
      const response = await this.httpClient.post(this.baseUrlForRuntimeConfigApi, httpPostBody).toPromise().catch(this.handleError);
      this.runtimeConfig = <RuntimeConfig> response.json().runtimeConfig;
    }
  }

  private handleError(error: any): Promise<any> {
    const logMessage = new LogMessage(error, 'RuntimeConfigService.handleError()');
    console.error(logMessage);
    return Promise.reject(error.message || error);
  }
}
