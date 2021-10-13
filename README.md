# Sticky Notes :ledger:

## ![Project Image](./stickynotes.png)

### Table of Contents

- [Description](#description)
- [Obstacles](#obstacles)
- [Technologies](#technologies)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Sticky Notes is a web application that enable users to take notes, save (delete) notes to (from) database, view notes that were created and saved in the past.

Key features

1. 'Add New' to add new sticky notes
2. 'View History' to select a date from calender no later than today to view the sticky notes created and saved in the past
3. Each sticky note is directly editable by double clicking title and paragraph section
4. 'Save' to save to database
5. 'Delete' to delete from the board and also delete from database (if saved there)

The app can be accessed at the link below.

> https://www.ranwwren.net/

---

## Obstacles

Making each sticky note directly editable and manage the state changes were bit of a challenge. I initially allowed setState on the input event. However, since each state change will trigger component update, the cursor returns back to the beginning.

Solution: On the input event, setState of the message object that is changing. OnBlur event, setState of sticky notes object.

---

## Technologies

- Frontend: React.js, JavaScript, HTML & CSS
- Backend: Node.js
- Cloud: AWS Amplify, API Gateway, Lambda, DynamoDB

---

## License

MIT License

---

## Get in touch

<div>
  <a href="https://www.instagram.com/ranwren/">
    <div>@ranwren</div>
    <img src="https://raw.githubusercontent.com/MikeCodesDotNET/MikeCodesDotNET/a8abbf37441f3253f74ea255a47f289208d7568c/Resources/instagram.svg" alt="Instagram" style="vertical-align:top; margin:4px">
  </a>
<a href="https://www.linkedin.com/in/ding-ran/">
  <div>@Ran Ding</div>
    <img src="https://raw.githubusercontent.com/MikeCodesDotNET/MikeCodesDotNET/a8abbf37441f3253f74ea255a47f289208d7568c/Resources/linkedIn.svg" alt="LinkedIn" style="vertical-align:top; margin:4px">
  </a>
</div>

[Back To The Top](#)
