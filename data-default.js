// Описание формата базы данных
// theme: тема вопросов (для раундов в теме 7 вопросов, для супер-игры у каждого вопроса своя тема)
// cat: только для вопросов в раундах. если true - доп функционал выбора кому адресовать вопрос
// (вопрос должен быть не по теме). если false - никак не влияет
// typeOfQuestion: тип вопроса
//       - text: текстовый вопрос
//       - picture: вопрос-картинка
//       - audio: аудио-вопрос (для супер-игры желательно длительностью около 30 секунд, время
// на раздумье для аудио-вопросов не ограничивается)
// linkQ: ссылка на файл вопроса (если тип вопроса - картинка или аудио)
// typeOfAnswer: тип ответа
//       - text: текстовый ответ
//       - picture: ответ-картинка
//       - audio: аудио-ответ
// linkA: ссылка на файл ответа (если тип ответа - картинка или аудио)

export const defaultQuestions = [
  [
    {
      theme: "тема ебать-колотить",
      line: [
        {
          cat: true,
          typeOfQuestion: "picture",
          question: "Вопрос № 1",
          linkQ:
            "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/4bdOFkFmZtuw6Q",
          typeOfAnswer: "audio",
          answer: "Ответ № 1",
          linkA:
            "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/d/FRNypOGk_1-oNg",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
  ],
  [
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
    {
      theme: "",
      line: [
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
        {
          cat: false,
          typeOfQuestion: "text",
          question: "",
          linkQ: "",
          typeOfAnswer: "text",
          answer: "",
          linkA: "",
        },
      ],
    },
  ],
];

export const defaultFinalQuestions = [
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
  {
    theme: "",
    typeOfQuestion: "text",
    question: "",
    linkQ: "",
    typeOfAnswer: "text",
    answer: "",
    linkA: "",
  },
];
