class Test {
    constructor(target) {
        this.container = document.querySelector(target); // 추후 dom 내용을 바꾸기 위한 선택자
        this.page = 0; // 0: intro, 1: test, 2: result 현재 페이지
        this.progress = 0; // 현재 질문 단계
        this.questions = {
            IE: [{ question: '나는 대면 중고거래가 무섭다', answer: { a:'그렇다', b:'가끔 그렇다',c: '아니다'} }],
            SN: [{ question: '거래 시, 돈을 받으면 상대방이 내 돈을 가지고 튈까봐 두렵다', answer: { a: '그렇다', b: '아무 생각도 없다', c:'그런 일이 생길리가 없다'} }],
            TF: [{ question: '거래한 품목에 이상이 있는 것 같다.', answer: { a: '바로 말한다', b: '고민하다 조금 지나서 말한다', c:'이정도면 괜찮지 한다' } }],
            JP: [{ question: '중고 거래 시간을 체계적으로 확인한다', answer: { a: '그렇다', b: '가끔 그렇다' ,c: '아니다'} }],
        }; // 질문 모음
        this.results = []; // 사용자가 선택한 답모음
        this.resultInfors = {
            result1: {title:"결과1", desc: "설명 1<br />설명 2"},
            result2: {title:"결과2", desc: "설명 1<br />설명 2"},
            result3: {title:"결과3", desc: "설명 1<br />설명 2"},
            result4: {title:"결과4", desc: "설명 1<br />설명 2"},
            result5: {title:"결과5", desc: "설명 1<br />설명 2"},
            result6: {title:"결과6", desc: "설명 1<br />설명 2"},
        }
        this.init()
    }

    init() {
        this.questionArray = this.getQuestion(); // 질문을 배열로 저장

        const answerAButton = this.container.querySelector('button[data-answer="a"]');
        const answerBButton = this.container.querySelector('button[data-answer="b"]');
        const answerCButton = this.container.querySelector('button[data-answer="c"]');
        const startButton = this.container.querySelector('button[data-action="start"]');
        const restartButton = this.container.querySelector('button[data-action="restart"]');

        answerAButton.addEventListener('click', () => this.submitAnswer(answerAButton.innerText));
        answerBButton.addEventListener('click', () => this.submitAnswer(answerBButton.innerText));
        answerCButton.addEventListener('click', () => this.submitAnswer(answerCButton.innerText));
        startButton.addEventListener('click', this.start.bind(this));
        restartButton.addEventListener('click', this.restart.bind(this));

        this.render();

    }

    start() {
        if(this.progress !== 0) return; // 진행중이면 실행하지 않음

        this.page = 1;
        this.render();
    }

    restart() {
        this.page = 0;
        this.progress = 0;
        this.results = [];
        this.render();
    }

    getQuestion() { // questions의 키를 참조해서 질문을 반환
        return Object.entries(this.questions)
        .flatMap(([type, questions]) => questions.map(question => ({ ...question, type })));
    }

    render() {
        const introContainer = this.container.querySelector('.intro_container');
        const testContainer = this.container.querySelector('.test_container');
        const resultContainer = this.container.querySelector('.result_container');

        if (this.page === 0) {
            this.start();
            introContainer.classList.add('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');

        } else if (this.page === 1) {
            testContainer.classList.add('active');
            introContainer.classList.remove('active');
            resultContainer.classList.remove('active');

            const progressElement = this.container.querySelector('.progress');
            const questionElement = this.container.querySelector('.question');
            const answerAElement = this.container.querySelector('button[data-answer="a"]');
            const answerBElement = this.container.querySelector('button[data-answer="b"]');
            const answerCElement = this.container.querySelector('button[data-answer="c"]');
        
            progressElement.textContent = `Q${this.progress + 1}. `;
            questionElement.textContent = this.getCurrentQuestions().question;
            answerAElement.textContent = this.getCurrentQuestions().answer.a;
            answerBElement.textContent = this.getCurrentQuestions().answer.b;
            answerCElement.textContent = this.getCurrentQuestions().answer.c;

        } else if (this.page === 2) {
            resultContainer.classList.add('active');
            introContainer.classList.remove('active');
            testContainer.classList.remove('active');
        
            const resultTextElement = this.container.querySelector('.result_text');
            const resultInforTitleElement = this.container.querySelector('.result_infor_title');
            const resultInforElement = this.container.querySelector('.result_infor');
            const calcResult = this.calcResult();
        
            resultTextElement.innerHTML = `당신의 성향은 <span class="point_text">${calcResult}</span>입니다.`;
            resultInforTitleElement.innerHTML = `[ ${this.resultInfors[calcResult].title} ]`;
        
            resultInforElement.innerHTML = this.resultInfors[calcResult].desc
            .split('<br />')
            .map(el => `<li>${el}</li>`)
            .join('');
        }
    }

}