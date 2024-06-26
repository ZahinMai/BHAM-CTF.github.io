# The Cauldron - Cybersecurity Resource

This repository hosts a series of cybersecurity challenges designed to teach and test skills in various domains of cybersecurity. It presents beginner-friendly challenges with a variety of difficulties that require minimal cybersecurity knowledge. 

- **Recommended age: 14-18**
- **Recommended team size: 3-4**

## Project Structure

- **README.md**: Provides an overview of the CTF, setup instructions, and details about the project structure.
- **index.html**: Entry point for participants to begin the CTF. Contains the interface for entering flags and accessing challenges.
- **login.html**: Opens in a new tab after participants complete the warm-up challenges in index.html. Participants will use this page to proceed with the next set of challenges related to compromising the target website. 
  **Note: Participants must keep index.html open to view instructions and enter flags. Do NOT refresh this page as progress will be lost.**
- **home.html**: Landing page after successful login. Participants can navigate to different challenges related to specific products.
- **product.html**: Page where specific challenges related to product interactions are hosted.
- **xss.md**: Documentation file explaining XSS vulnerabilities and techniques participants need to understand. Opens via a link in its respective challenge.
- **static**: Directory containing CSS styles, images, and scripts used throughout the CTF.
  - **/css**: Directory for CSS stylesheets.
    - `cauldron.css`: Styles specific to the CTF challenges.
    - `intro-challs.css`: Styles for introductory challenges.
  - **/images**: Directory for image assets used in the CTF challenges.
  - **/scripts**: Directory for JavaScript files.
    - `cauldron-script.js`: JavaScript logic specific to the CTF challenges.
    - `intro-script.js`: JavaScript for introductory challenges. S

### Delivery Guidelines

1. **Download this repository**: Click on the green "Code" button above and select "Download ZIP". Alternatively, clone the repository using Git:
   ```
   git clone https://github.com/your-username/your-ctf.git
   ```
2. **Introduction to Cybersecurity**: Start by providing a quick introduction to cybersecurity and the skills participants will develop during this session. Explain what a CTF (Capture The Flag) is and its relevance to cybersecurity learning.

3. **Use index.html for Instructions**: Ensure students keep index.html open throughout the session. They should not access the project directory or its files directly from the system, as this could reveal answers.

4. **Ethical Hacking Guidelines**: Emphasize the importance of ethical hacking and respect for rules. Ensure participants understand:
   - Not to attack the infrastructure hosting the CTF.
   - How to report issues or bugs responsibly.

5. **Demonstration of Challenges**: Walk participants through the first two challenges to demonstrate how they work. Further support should not be necessary as hints are provided within the challenges themselves.

6. **Encourage Collaboration and Progress Monitoring**: Foster collaboration among participants. Monitor their progress and ensure teams record all flags obtained to safeguard against loss upon website refresh or reload.

### Feedback and Contribution

- **Gather Feedback**: Collect feedback from participants about their experience with the CTF. Use this feedback to improve future sessions.
- **Contribute**: This resource is continually evolving. Please contribute new challenges, improve existing ones, or provide feedback to enhance the learning experience.

## Contact

For any questions, feedback, or support, please contact me via email: zahin08@outlook.com