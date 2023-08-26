const validateName = (name) => {
    const nameR = new RegExp(/\d/);
    if (!name || name.trim().length === 0) {
        return "Name is required";
    } else if (nameR.test(name)) {
        return "Name cannot contain numbers :(";
    }
    return "";
}

const validateDifficulty = (difficulty) => {
    if (!difficulty) {
        return "Difficulty is required";
    } else if (difficulty < 1 || difficulty > 5) {
        return "Diffficulty is out of range. Range: 1 - 5";
    }
    else if (isNaN(difficulty)) {
        return "Difficulty must be a number"
    }
    return "";
}

const validateDuration = (duration) => {
    if (!duration) {

        return "Duration is required";
    } else if ((isNaN(duration) || duration <= 0)) {
        return 'Duration must be a number'
    }
    return "";
}
const validateCountries = (countries) => {
    if (!countries || countries.length === 0) {
        return "You must choice one or more countries";
    }
    return "";
}

const validateSeason = (season) => {
    if (!season) {
        return "You must choose a season";
    } else if (season !== "Summer" && season !== "Autumn" && season !== "Winter" && season !== "Spring") {
        return "Invalid season selected";
    }
    return "";
};


const validateForm = (form) => {
    const errors = {
        name: validateName(form.name),
        difficulty: validateDifficulty(form.difficulty),
        duration: validateDuration(form.duration),
        countries: validateCountries(form.countries),
        season: validateSeason(form.season)
    };

    return errors;
};

export { validateDifficulty, validateName, validateDuration, validateCountries, validateSeason, validateForm, } 