import styles from './Netflix.module.css'

function Netflix() {
    return (
        <div>
        <h4 className={styles.title}>넷플릭스</h4>
        <ul className={styles.contain}>
            <li>Netflix</li>
            <li>'인터넷'과 '영화'를 합성한 이름</li>
            <li>전 세계 190개국 이상의, 2.1억 명의 회원을 보유한 스트리밍 엔터테인먼트 기업</li>
            <li>다양한 장르의 컨텐츠들을 언제, 어디서나, 무제한으로 모든 기기에서 볼 수 있는 플랫폼</li>
            <li>1997년 캘리포니아에서 리드 헤이스팅스와 마크 랜돌프(Marc Randolph)가 창업</li>
            <li>본사는 미국 캘리포니아 로스 가토스</li>
        </ul>
        </div>
    )
}

export default Netflix;