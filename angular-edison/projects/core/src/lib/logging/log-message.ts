/**
 * Design - we have chosen to make every log message written in our system a structured object. We do this because
 * we feel that having structure makes large data analysis tasks easier (ie BigQuery and Dataflow jobs).
 *
 * Required params:
 *  - message
 *  - functionName
 *
 * Optional params:
 *  - engagementExperimentTraceId
 *  - engagementInteractionTraceId
 *
 * Note - because we cannot assume that every system LogMessage is directly tied to a User interaction / engagement,
 * we cannot make those fields required. That said, any log message that is directly tied to a User interaction / engagement
 * should include this params for traceability through the system.
 */
export class LogMessage {

    constructor(public message: string, public functionName: string, public engagementExperimentTraceId?: string,
                public engagementInteractionTraceId?: string) {}
}
