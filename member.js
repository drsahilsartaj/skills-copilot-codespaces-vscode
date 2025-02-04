function skillsMember() {
    // console.log('skillsMember');
    const skills = document.querySelectorAll('.skills-member');
    for (let skill of skills) {
        const skillValue = skill.getAttribute('data-value');
        skill.style.width = skillValue + '%';
    }
}