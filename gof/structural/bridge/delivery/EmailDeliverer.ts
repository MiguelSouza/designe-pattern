export class EmailDeliverer {
  send(to: string, content: string) {
    console.log(`Sending email to ${to} with content:\n${content}`);
  }
}
