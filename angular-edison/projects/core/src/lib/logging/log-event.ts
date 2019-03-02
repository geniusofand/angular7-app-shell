
export class LogEvent {

    eventName: string;
    eventPublisher: string;
    eventValue: any;
    functionName: string;
    engagementExperimentTraceId: string;
    engagementInteractionTraceId: string;

    constructor(eventName: string, eventPublisher: string, eventValue: any,
                functionName: string, engagementExperimentTraceId: string, engagementInteractionTraceId: string) {

        this.eventName = eventName;
        this.eventPublisher = eventPublisher;
        this.eventValue = eventValue;
        this.functionName = functionName;
        this.engagementExperimentTraceId = engagementExperimentTraceId;
        this.engagementInteractionTraceId = engagementInteractionTraceId;
    }
}
