import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces";

@Pipe({
    name: 'filter'
})

export class filterPipe implements PipeTransform {

    transform(value: Array<User>, arg: any): any {
        const resultPosts = [];
        for (const users of value) {
            if (users.first_name.indexOf(arg) > -1) {
                resultPosts.push(users);
            };
        };
        return resultPosts;
    }
}

/*   transform(value: any, filterString: string): any {
       if (value.length === 0) {
           return value;
       }
       const users = [];
       for (const user of value) {
           if (user['first_name'] === filterString) {
               users.push(user)
           }

       }
       return users;
   }

}*/








