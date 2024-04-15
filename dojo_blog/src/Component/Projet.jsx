import'./projet.css'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcons from "@mui/icons-material/School"


const Projet = () => {
    
  return (
    <div className='projet'>
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2022 - 2023'
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<SchoolIcons/>}
          >
            <span className='vertical-timeline-element-title'>
              1ère année de formation MASTER en Développement d’application Internet/Intranet ( DA2I )
              </span>
            <p>E M I T, Université de Fianarantsoa</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2021 - 2022'
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<SchoolIcons/>}
          >
            <span className='vertical-timeline-element-title'>
            3ème année de formation  Licence en Développement d’application Internet/Intranet ( DA2I )
              </span>
            <p>E M I T, Université de Fianarantsoa</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2019 - 2020'
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<SchoolIcons/>}
          >
            <span className='vertical-timeline-element-title'>
            2éme année de formation Licence en Développement d’application Internet/Intranet ( DA2I )
              </span>
            <p>E M I T, Université de Fianarantsoa</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2018 - 2019'
          iconStyle={{background:"#3e497a", color:"#fff"}}
          icon={<SchoolIcons/>}
          >
            <span className='vertical-timeline-element-title'>
            1ère année de formation Licence en Développement d’application Internet/Intranet ( DA2I )
              </span>
            <p>E M I T, Université de Fianarantsoa</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Projet