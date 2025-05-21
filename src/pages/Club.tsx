
export default function Club() {
    return (
      <div className='main-container'>
        <h1 className="title">시니어클럽소개</h1>

        <div className="content-container">
          <h1 style={{fontSize: '27px', marginBottom: '20px'}}> • 시니어클럽이란?</h1>
          <p style={{fontSize: '24px'}}>
            시니어클럽은 대한민국에서 만 60세 이상의 어르신들에게 일자리와 사회참여 기회를 제공하기 위해 운영되는 기관입니다. 
            보건복지부의 지원 아래 각 지방자치단체와 민간 복지기관 등이 함께 참여하여 지역별로 운영되며, 
            고령화 사회 속에서 노인의 건강한 노후생활과 경제적 자립을 지원하는 중요한 역할을 하고 있습니다.
          </p>
        </div>

        <div>
          <h1 style={{fontSize: '27px', marginBottom: '20px'}}> • 노인일자리 및 사회활동지원사업 유형</h1>
          <div className="img-container">
            <img width='211px' height='265px'></img>
            <img width='211px' height='265px'></img>
            <img width='211px' height='265px'></img>
            <img width='211px' height='265px'></img>
          </div>
        </div>
      </div>
    )
  }
  