import * as Vue from "https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.prod.js";
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      subjects: [
        "English Language",
        "Mathematics",
        "Islamiyyah",
        "Yoruba",
        "Quran",
        "Verbal Reasoning",
        "Quantitative Reasoning",
        "Hand Writing",
        "Creative Art",
        "Social Studies",
        "Provocational Studies",
        "Basic Science and Technology",
      ],
      events: {
        "1ST C.A": 10,
        "2ND C.A": 20,
        "3RD C.A": 10,
        "Examination": 60,
        "Total": "Total",
        "Class Average": "%",
        "Highest in Class": "%",
        "Lowest in Class": "%",
      },
      domains: [
        "Attentiveness",
        "Neatness",
        "Honesty",
        "Leadership",
        "Politeness",
        "Punctuality"
      ],
      skills: [
        "Games",
        "Verbal Fluency",
        "Handwriting",
        "Handling Tools"
      ]
    };
  },
});

app.mount("#app");
