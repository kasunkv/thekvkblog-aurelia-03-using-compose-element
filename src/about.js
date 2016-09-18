export class About {
    constructor() {
        this.aboutMessage = 'This is the Hello Aurelia app used in Building Apps with Aurelia blog series by The KVK Blog';
        this.profiles = [
            {       
                id: 1,         
                name: 'John Doe',
                role: 'Lead Developer',
                image: 'https://api.adorable.io/avatars/120/john-doe'
            },
            {       
                id: 2,         
                name: 'Jason Smith',
                role: 'Lead Designer',
                image: 'https://api.adorable.io/avatars/120/jason-smith'
            },
            {       
                id: 3,         
                name: 'Jane Doe',
                role: 'Designer',
                image: 'https://api.adorable.io/avatars/120/jane-doe'
            }
        ];
    }
}