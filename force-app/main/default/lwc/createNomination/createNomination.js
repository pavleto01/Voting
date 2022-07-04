import { LightningElement, track, wire } from "lwc";

import CreateNomination from "@salesforce/apex/NominationController.CreateNomination";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class insertRecordCustomObjectLwc extends LightningElement {
  @track Name;
  @track Type;
  @track Description;
  @track errorMsg;

  get options() {
    return [
      { label: "Team", value: "Team" },
      { label: "Employee", value: "Employee" }
    ];
  }

  HandleChange(event) {
    if (event.target.name == "Name") {
      this.Name = event.target.value;
    }
    if (event.target.name == "Type") {
      this.Type = event.target.value;
    }

    if (event.target.name == "Description") {
      this.Description = event.target.value;
    }
  }

  submitAction() {
    CreateNomination({
      Name:this.Name,
      Description:this.Description,
      Type:this.Type})
      .then((result) => {
        const toastEvent = new ShowToastEvent({
          title: "Success!",
          message: "Record created successfully",
          variant: "success"
        });
        this.dispatchEvent(toastEvent);
      })
      .catch((error) => {
        this.errorMsg = error.message;
        window.console.log(this.error);
      });
  }
}
