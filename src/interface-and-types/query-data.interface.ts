export interface MQueueData {
    metadata: {
        entity: string 
        operation: string 
        source: string  
        destination: string 
        timestamp: string
        businessId?: string 
    };
    data: any
}