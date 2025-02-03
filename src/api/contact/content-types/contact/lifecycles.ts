export default {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    const { email, name, message } = result;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "quang250120000@gmail.com",
        from: email,
        subject: `${name} Has Sent You a Message`,
        text: message,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
