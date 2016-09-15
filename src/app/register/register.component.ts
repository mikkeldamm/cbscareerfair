import { Component } from '@angular/core';

@Component({
    selector: 'register',
    styleUrls: ['./register.style.scss'],
    templateUrl: './register.template.html'
})
export class Register {

    formSubmitted: boolean = false;
    firstname: string;
    lastname: string;
    email: string;
    status: string = "CBS student";
    enrolment: string = "";
    programme: string = "";

    submit($event) {

        this.formSubmitted = true;

        if (!this.isFormValid()) {

            $event.preventDefault();
            $event.stopPropagation();

            return false;
        }

        console.log(true);

        return true;
    }

    private isFormValid() {

        return this.firstname && this.firstname.length > 1 &&
            this.lastname && this.lastname.length > 1 &&
            this.email && this.email.length > 1 &&
            this.status && this.status.length > 1 &&
            this.enrolment && this.enrolment.length > 1 &&
            this.programme && this.programme.length > 1;
    }
}