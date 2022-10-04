import { randomUUID } from "crypto";

export class entity {
  constructor(params) {
    this.id = params.id ?? randomUUID();
    this.title = params.title;
    this.evaluation = params.evaluation;
    this.details = params.details;
  }

  validate() {
    if (!this.title || !this.evaluation || !this.details) {
      throw new Error("fill in all fields");
    }
  }

  getEntity() {
    return {
      id: this.id,
      title: this.title,
      evaluation: this.evaluation,
      details: this.details,
    };
  }
}
