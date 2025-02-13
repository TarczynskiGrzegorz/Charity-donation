document.addEventListener("DOMContentLoaded", function () {

    /**
     * Form Select
     */
    class FormSelect {
        constructor($el) {
            this.$el = $el;
            this.options = [...$el.children];
            this.init();
        }

        init() {
            this.createElements();
            this.addEvents();
            this.$el.parentElement.removeChild(this.$el);
        }

        createElements() {
            // Input for value
            this.valueInput = document.createElement("input");
            this.valueInput.type = "text";
            this.valueInput.name = this.$el.name;

            // Dropdown container
            this.dropdown = document.createElement("div");
            this.dropdown.classList.add("dropdown");

            // List container
            this.ul = document.createElement("ul");

            // All list options
            this.options.forEach((el, i) => {
                const li = document.createElement("li");
                li.dataset.value = el.value;
                li.innerText = el.innerText;

                if (i === 0) {
                    // First clickable option
                    this.current = document.createElement("div");
                    this.current.innerText = el.innerText;
                    this.dropdown.appendChild(this.current);
                    this.valueInput.value = el.value;
                    li.classList.add("selected");
                }

                this.ul.appendChild(li);
            });

            this.dropdown.appendChild(this.ul);
            this.dropdown.appendChild(this.valueInput);
            this.$el.parentElement.appendChild(this.dropdown);
        }

        addEvents() {
            this.dropdown.addEventListener("click", e => {
                const target = e.target;
                this.dropdown.classList.toggle("selecting");

                // Save new value only when clicked on li
                if (target.tagName === "LI") {
                    this.valueInput.value = target.dataset.value;
                    this.current.innerText = target.innerText;
                }
            });
        }
    }

    document.querySelectorAll(".form-group--dropdown select").forEach(el => {
        new FormSelect(el);
    });

    /**
     * Hide elements when clicked on document
     */
    document.addEventListener("click", function (e) {
        const target = e.target;
        const tagName = target.tagName;

        if (target.classList.contains("dropdown")) return false;

        if (tagName === "LI" && target.parentElement.parentElement.classList.contains("dropdown")) {
            return false;
        }

        if (tagName === "DIV" && target.parentElement.classList.contains("dropdown")) {
            return false;
        }

        document.querySelectorAll(".form-group--dropdown .dropdown").forEach(el => {
            el.classList.remove("selecting");
        });
    });

    /**
     * Switching between form steps
     */
    class FormSteps {
        constructor(form) {
            this.$form = form;
            this.$next = form.querySelectorAll(".next-step");
            this.$prev = form.querySelectorAll(".prev-step");
            this.$step = form.querySelector(".form--steps-counter span");
            this.currentStep = 1;

            this.$stepInstructions = form.querySelectorAll(".form--steps-instructions p");
            const $stepForms = form.querySelectorAll("form > div");
            this.slides = [...this.$stepInstructions, ...$stepForms];

            this.init();
        }

        /**
         * Init all methods
         */
        init() {
            this.events();
            this.updateForm();
        }

        /**
         * All events that are happening in form
         */
        events() {
            // Next step
            this.$next.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.currentStep++;
                    this.updateForm();
                });
            });

            // Previous step
            this.$prev.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.currentStep--;
                    this.updateForm();
                });
            });

            // Form submit
            this.$form.querySelector("form").addEventListener("submit", e => this.submit(e));
        }

        /**
         * Update form front-end
         * Show next or previous section etc.
         */
        updateForm() {
            this.$step.innerText = this.currentStep;

            // TODO: Validation

            this.slides.forEach(slide => {
                slide.classList.remove("active");

                if (slide.dataset.step == this.currentStep) {
                    slide.classList.add("active");
                }
            });

            this.$stepInstructions[0].parentElement.parentElement.hidden = this.currentStep >= 5;
            this.$step.parentElement.hidden = this.currentStep >= 5;

            // TODO: get data from inputs and show them in summary
        }

    }

    const form = document.querySelector(".form--steps");
    if (form !== null) {
        new FormSteps(form);
    }
    let summarySpan = document.querySelector("#quantity--categories");
    let categoriesText = "";
    const categories = document.querySelectorAll("input[type=checkbox]")
    Array.from(categories).forEach(function (element) {
        element.addEventListener("change", onClickCheckBox);
    })

    function onClickCheckBox() {
        let currentValue = this.id;

        if (this.checked) {
            if (categoriesText) {
                categoriesText = categoriesText + ", " + currentValue;
            } else {
                categoriesText = currentValue;
            }
            summarySpan.innerText = categoriesText;
            console.log(summarySpan.innerText);
        } else {
            if (categoriesText) {
                const categoriesTextArray = categoriesText.split(", ");
                console.log(categoriesTextArray);

                let filteredArray = categoriesTextArray.filter(function (element, index, array) {
                    return element != currentValue;
                });
                console.log(filteredArray);
                categoriesText = filteredArray.join(", ");
                summarySpan.innerText = categoriesText;
            } else {
                categoriesText = this.id;
            }
            console.log(summarySpan.innerText);
        }
    }

    const institutions = document.querySelectorAll("input[type=radio]");
    Array.from(institutions).forEach(function (elem) {
        elem.addEventListener("change", onClickRadio);
    });

    let institution ;
    function onClickRadio(){
        institution =this.parentElement.children[2].firstElementChild.innerText;
        // console.log(this.parentElement.children[2].firstElementChild.innerText);
    }

    const confirmButton = document.querySelector(".confirm");
    confirmButton.addEventListener("click", function () {
        let quantity = document.querySelector("#quantity");
        let institutionConfirmation = document.querySelector("#institution-confirmation");
        institutionConfirmation.innerText = institution;

        const streetForm = document.querySelector("#streetToConfirm").value;
        const streetConfirm  =document.querySelector("#street--confirm");
        streetConfirm.innerText=streetForm;

        const cityForm = document.querySelector("#cityToConfirm").value;
        const cityConfirm  =document.querySelector("#city--confirm");
        cityConfirm.innerText=cityForm;

        const zipCodeForm = document.querySelector("#zipCodeToConfirm").value;
        const zipCodeConfirm  =document.querySelector("#code--confirm");
        zipCodeConfirm.innerText=zipCodeForm;

        const pickUpDateForm = document.querySelector("#pickUpDateToConfirm").value;
        const pickUpDateConfirm  =document.querySelector("#date--confirm");
        pickUpDateConfirm.innerText=pickUpDateForm;

        const pickUpTimeForm = document.querySelector("#pickUpTimeToConfirm").value;
        const pickUpTimeConfirm  =document.querySelector("#time--confirm");
        pickUpTimeConfirm.innerText=pickUpTimeForm;

        summarySpan.innerText = summarySpan.innerText.split(" :")[0] + " :" + quantity.value + " szt. worków po 60L.";
    })

});
