document.addEventListener('DOMContentLoaded', () => {
    const workedYes = document.getElementById('workedYes');
    const workedNo = document.getElementById('workedNo');
    const currentlyEmployedYes = document.getElementById('currentlyEmployedYes');
    const currentlyEmployedNo = document.getElementById('currentlyEmployedNo');

    const employmentDatesGroup = document.getElementById('employmentDatesGroup');
    const currentlyEmployedGroup = document.getElementById('currentlyEmployedGroup');
    const dateEndedGroup = document.getElementById('dateEndedGroup');
    
    const addExperienceButton = document.getElementById('addExperience');
    const workExperienceContainer = document.getElementById('workExperience');

    const agreeTermsCheckbox = document.getElementById('agreeTerms');
    const submitButton = document.querySelector('button[type="submit"]');

    function updateEmploymentFields() {
        if (workedYes.checked) {
            employmentDatesGroup.style.display = 'block';
            currentlyEmployedGroup.style.display = 'block';
            updateEndDateField();
        } else {
            employmentDatesGroup.style.display = 'none';
            currentlyEmployedGroup.style.display = 'none';
            dateEndedGroup.style.display = 'none';
        }
    }

    function updateEndDateField() {
        if (currentlyEmployedYes.checked) {
            dateEndedGroup.style.display = 'none';
        } else {
            dateEndedGroup.style.display = 'block';
        }
    }

    function updateSubmitButtonState() {
        submitButton.disabled = !agreeTermsCheckbox.checked;
    }

    workedYes.addEventListener('change', updateEmploymentFields);
    workedNo.addEventListener('change', updateEmploymentFields);
    currentlyEmployedYes.addEventListener('change', updateEndDateField);
    currentlyEmployedNo.addEventListener('change', updateEndDateField);

    updateEmploymentFields();

    agreeTermsCheckbox.addEventListener('change', updateSubmitButtonState);

    addExperienceButton.addEventListener('click', () => {
        const experienceCount = workExperienceContainer.children.length + 1;

        const experienceEntry = document.createElement('div');
        experienceEntry.classList.add('experience-entry', 'mb-3');

        experienceEntry.innerHTML = `
            <h4>Experience ${experienceCount}</h4>
            <div class="form-group">
                <label for="jobTitle${experienceCount}">Job Title</label>
                <input type="text" class="form-control" id="jobTitle${experienceCount}" name="experienceTitle${experienceCount}" required>
            </div>
            <div class="form-group">
                <label for="employer${experienceCount}">Employer</label>
                <input type="text" class="form-control" id="employer${experienceCount}" name="experienceEmployer${experienceCount}" required>
            </div>
            <div class="form-group">
                <label for="startDate${experienceCount}">Start Date</label>
                <input type="date" class="form-control" id="startDate${experienceCount}" name="experienceStartDate${experienceCount}" required>
            </div>
            <div class="form-group">
                <label for="endDate${experienceCount}">End Date</label>
                <input type="date" class="form-control" id="endDate${experienceCount}" name="experienceEndDate${experienceCount}">
            </div>
            <div class="form-group">
                <label for="duties${experienceCount}">Duties</label>
                <textarea class="form-control" id="duties${experienceCount}" name="experienceDuties${experienceCount}" rows="3" required></textarea>
            </div>
        `;

        workExperienceContainer.appendChild(experienceEntry);
    });
    updateSubmitButtonState();
});
