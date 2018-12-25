export class NewCustomer {
    constructor(
        public customerNIC: string,
        public name: string,
        public telephone: number,
        public address: string,
        public agent_id: number,
      ) {  }
    
    }