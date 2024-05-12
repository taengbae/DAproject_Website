/*
  Level.1 나는 중고거래 입문자!, 0
  Level.50 나는 중고거래 초보자!, 1
  Level.100 나는 중고거래 중급자!, 2
  Level.500 나는 중고거래 상급자!, 3
  Level.1000 나는 중고거래의 신!, 4
*/

const qnaList = [
  //type 안에 있는 값은 나중에 결과값 도출하기 위한 계산값임
  //나중에 다 변경해야함
  {
    q: '1. 어떻게 중고거래를 처음으로 접하게 됐어 ?',
    a: [
      { answer: '주변 지인/친구가 하라고 해서 해봤어!', type: [0, 1, 2, 3, 4] },
      { answer: 'SNS에 중고거래가 뜨길래 호기심에~', type: [0, 1, 2, 3, 4] },
      { answer: '영화나 드라마에서 나오는 중고거래 장면이 재밌어보여서~', type: [0, 1, 2, 3, 4] },
      { answer: '광고를 보고 궁금해서 시작해봤어!', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '2. 너는 중고거래 예절에 대해서 얼마나 많이 아는거 같아 ?',
    a: [
      { answer: '잘 모르겠어.. 굳이 알아야 할까?', type: [0] },
      { answer: '중고거래 문화나 기본 예절 정도는 알아!', type: [1, 2] },
      { answer: '중고거래에 대해서 모르는게 없어!', type: [3, 4] },
    ]
  },
  {
    q: '3. 자주 이용하는 편이야 ?',
    a: [
      { answer: '별루.. 1년에 1번 할까 말까하는듯', type: [0] },
      { answer: '6개월에 1번 정도는 하는듯', type: [1] },
      { answer: '분기(3달)당 1번 이상은 해 !', type: [2] },
      { answer: '1달에 1번 정도~ 꽤 많이 하지', type: [3] },
      { answer: '1주일에 1번 이상으로 엄청 자주해', type: [4] },
    ]
  },
  {
    q: '4. 어떤 거래 방식을 선호해 ?',
    a: [
      { answer: '거래 물건은 직접 봐야지 ! 난 만나서 하는게 좋아', type: [0, 1, 2, 3, 4] },
      { answer: '난 낯선 사람이랑 만나기 싫어. 택배로 거래해', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '5. 어떤 시간에 거래를 많이 해봤어 ?',
    a: [
      { answer: '난 아침일찍 거래하는 게 좋더라', type: [0, 1, 2, 3, 4] },
      { answer: '아침잠이 많아서.. 오후가 좋아', type: [0, 1, 2, 3, 4]},
      { answer: '난 일이 있어서 완전 저녁 늦게 하는 편인듯', type: [0, 1, 2, 3, 4] },
    ]
  },

  {
    q: '6. 넌 주로 판매를 많이 해? 구매를 많이 해 ?',
    a: [
      { answer: '난 판매를 많이 하는 것 같아!', type: [0, 1, 2, 3, 4] },
      { answer: '나는 구매를 많이 하는 것 같아!', type: [0, 1, 2, 3, 4] },
      { answer: '나는 구매도 많이하고 판매도 많이하는 편이야!', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '7. 중고 거래를 할 때 가장 잘 못 된 생각은 뭘까 ?',
    a: [
      { answer: '전혀 안전하지 않은 거래는 피하는게 좋을거 같아!', type: [0, 1, 2, 3, 4] },
      { answer: '돈을 먹고 튀어도 된다고 생각해!', type: [0, 1, 2, 3, 4] },
      { answer: '정직하고 솔직하게 거래를 해야한다고 생각해!', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '8. 주로 중고거래를 이용하는 거래 플랫폼이 뭐야 ?',
    a: [
      { answer: '당근마켓', type: [0, 1, 2, 3, 4 ] },
      { answer: '중고나라', type: [0, 1, 2, 3, 4] },
      { answer: '번개장터', type: [0, 1, 2, 3, 4] },
      { answer: '헬로마켓', type: [0, 1, 2, 3, 4] },
      { answer: '하트마켓', type: [0, 1, 2, 3, 4] },
      { answer: '팔라고', type: [0, 1, 2, 3, 4] },
      { answer: '에브리타임', type: [0, 1, 2, 3, 4] },
      { answer: '난 플랫폼 사이트 안써', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '9. 한 번 거래할 때 돈을 얼마나 사용해 ?',
    a: [
      { answer: '10,000원 이내로 구매해!', type: [0, 1] },
      { answer: '10,000원 이상 50,000원 이하로 구매해!', type: [2] },
      { answer: '50,000원 이상 비싸게 구매하는거 같아!', type: [3, 4 ] },
    ]
  },
  {
    q: '10. 주로 왜 물건을 파는 거야 ? (만약 안 해 봤다면 왜 팔 것 같아?)',
    a: [
      { answer: '돈이 필요해서 자금을 마련하려구!', type: [0, 1, 2, 3, 4] },
      { answer: '내돈주고 산건데 버리기 아깝잖아!', type: [0, 1, 2, 3, 4 ] },
      { answer: '이사가거나 공간이 없다고 생각될 때 파는 것 같아!', type: [0, 1, 2, 3, 4 ] },
      { answer: '친구나 부모님이 부탁해서 팔아봤어!', type: [0, 1, 2, 3, 4 ] },
    ]
  },
  {
    q: '11. 주로 중고거래로 물건을 구입하는 이유가 뭐야? (만약 안 해 봤다면 왜 살 것 같아?)',
    a: [
      { answer: '정가보다 저렴 하잖아!', type: [0, 1, 2, 3, 4] },
      { answer: '공식 판매가 종료되거나 구하기 어려워서~ ', type: [0, 1, 2, 3, 4 ] },
      { answer: '부담없이 단기간 사용할 수 있잖아 ! ', type: [0, 1, 2, 3, 4 ] },
      { answer: '급하게 호다닥 필요할 때가 있엉', type: [0, 1, 2, 3, 4] },
    ]
  },
  {
    q: '12. 중고거래로 횟수가 어떻게 돼 ?',
    a: [
      { answer: '10번 미만 정두 되는 듯', type: [0, 1] },
      { answer: '꽤 많이 해봤어 10번 이상은 해본듯 !', type: [2] },
      { answer: '난 중고거래 고수야 완전 셀수도 없어', type: [3, 4 ] },
    ]
  },
  {
    q: '13. 중고거래에서 구매 계속 할거야 ?',
    a: [
      { answer: '웅. 은근 재밌어', type: [0, 1 ] },
      { answer: '글쎄, 잘모르겠는뎅', type: [2] },
      { answer: '아니 난 이제 안하려고', type: [3, 4 ] },
    ]
  },
  {
    q: '14. 앞으로도 중고거래에서 계속 물건을 판매 할거야?',
    a: [
      { answer: '아니! 난 이제 안하려구..', type: [0, 1] },
      { answer: '가끔씩 생각나면 할거 같아!', type: [2] },
      { answer: '웅. 판매해서 얻는 돈이 쏠쏠해!', type: [3, 4] },
    ]
  }
  ,
  {
    q: '15. 중고거래에 대한 전체적인 만족도가 어떻게 돼? [5점 만 점]',
    a: [
      { answer: '1점 ⭐️', type: [0] },
      { answer: '2점 ⭐️⭐️', type: [1] },
      { answer: '3점 ⭐️⭐️⭐️', type: [2] },
      { answer: '4점 ⭐️⭐️⭐️⭐️', type: [3] },
      { answer: '5점 ⭐️⭐️⭐️⭐️⭐️', type: [4] },
    ]
  }
]

const infoList = [
  {
    name: 'Level.1 나는 중고거래 입문자!',
    desc: '당신은 이제 막 중고거래의 문을 두드린 신입입니다! 당신이 아직은 거래 세계의 큰 파도를 헤쳐나갈 준비가 되어 있지 않음을 의미하지만, 굴하지 않고 배움의 자세로 매 거래를 임하고 있습니다. 꼼꼼하게 상품 설명을 읽고, 가격을 비교하는 것에서부터 시작해보세요. 첫 거래에서 성공적인 흥정을 경험하면, 다음 단계로 나아갈 준비가 될 거예요!'
  },
  {
    name: 'Level.50 나는 중고거래 초보자!',
    desc: '중고거래의 세계에서 조금씩 자신의 발을 들여놓기 시작했습니다. 당신이 여전히 학습 중이지만, 이제는 당신만의 거래 방식을 찾아가고 있다는 신호입니다. 몇 번의 거래를 통해 더욱 감각을 익히고, 눈치와 기술을 키우는 단계에 있습니다. 이제 슬슬 다양한 판매자와의 소통을 통해 교섭의 묘를 배우고 있을 테죠.'
  },
  {
    name: 'Level.100 나는 중고거래 중급자!',
    desc: '중고거래에서 어느 정도 자신의 위치를 확립하고 있는 당신! 이제 거래를 할 때 기본적인 주의사항과 요령을 잘 알고 있으며, 더 좋은 거래를 위해 필요한 전략적 사고를 발휘할 수 있습니다. 이제는 물건의 상태를 정확하게 파악하고, 가격 협상에서도 자신감을 가지고 요구할 수 있죠. 중급자로서의 당신은 더 나은 거래를 추구하며 경험을 쌓아가고 있습니다.'
  },
  {
    name: 'Level.500 나는 중고거래 상급자!',
    desc: '당신은 중고거래 시장에서 수많은 거래를 성공적으로 마무리지은 베테랑입니다. 다양한 플랫폼과 거래 방식에 능숙하며, 눈에 보이지 않는 거래의 심리까지 읽을 수 있는 능력을 갖추었습니다. 상급자로서의 당신은 거래의 모든 과정을 진두지휘하며, 때로는 다른 거래자들에게 조언자 역할까지 맡게 됩니다. 중고거래의 묘미를 제대로 알고 즐기고 있는 당신은 신뢰와 경험을 바탕으로 어떤 거래든 자신 있게 이끌어 갑니다. '
  },
  {
    name: 'Level.1000 나는 중고거래의 신!',
    desc: '여기에 이르렀다면, 당신은 중고거래에서 신적인 존재로 군림합니다! 중고거래의 모든 요소를 완벽하게 제어하며, 어떤 거래든지 최적의 조건으로 이끌어내는 능력을 갖추었습니다. 최고의 가격, 최상의 상태, 최적의 타이밍을 직감적으로 알아내고, 이를 이용해 매 거래마다 최고의 결과를 가져옵니다. 이제 당신은 거래를 넘어서 그 자체로 하나의 레전드이며, 중고거래의 세계를 재편하는 크리에이터로서 자리매김하고 있습니다. '
  },
]