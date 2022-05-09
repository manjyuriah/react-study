import styles from './Youtube.module.css'
function Youtube() {
    return (
        <div>
        <h4 className={styles.title}>유튜브</h4>
        <ul className={styles.contain}>
            <li>YouTube</li>
            <li>유튜브는 구글이 서비스하는 동영상 공유 플랫폼</li>
            <li>2006년에 구글이 인수</li>
            <li>전세계 최대 규모의 동영상 공유 및 호스팅 사이트</li>
            <li>이용자가 영상을 시청 · 업로드 · 공유</li>
            <li>본사는 미국 캘리포니아주 샌브루노</li>
        </ul>
        </div>
    )
}

export default Youtube;