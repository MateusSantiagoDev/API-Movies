import { randomUUID } from "crypto";

export class entity {
  constructor(params) {
    this.id = params.id ?? randomUUID();
    this.title = params.title;
    this.evaluation = params.evaluation;
    this.details = params.details;
    this.image = params.image;
    this.url = params.url;
    this.information = params.information;
  }

  validate() {
    if (!this.title || !this.evaluation || !this.details || !this.image || !this.url || !this.information) {
      throw new Error("fill in all fields");
    }
  }

  getEntity() {
    return {
      id: this.id,
      title: this.title,
      evaluation: this.evaluation,
      details: this.details,
      image: this.image,
      url: this.url,
      information: this.information,
    };
  }
}
