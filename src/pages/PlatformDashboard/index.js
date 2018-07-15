import React from 'react'
import Default from '../../layouts/Default'
import styles from './styles.css'
import commonStyles from './../../fragments/common.css';
import UseCasesSection from '../../fragments/UseCasesSection'
import SectionSeperator from '../../fragments/SectionSeperator'
import Features from './../../fragments/Features'

import iconDashboard from '../../assets/images/icon-dashboard.png';
import Illustration from '../../assets/images/illustration-platform-dash.png';
import IllustrationPart1 from '../../assets/images/illustration-use-case-1.png';
import IllustrationPart2 from '../../assets/images/illustration-use-case-2.png';
import IllustrationPart3 from '../../assets/images/illustration-use-case-3.png';
import iconFeature1 from '../../assets/images/icon-feature-1.png';
import iconFeature2 from '../../assets/images/icon-feature-2.png';
import iconFeature3 from '../../assets/images/icon-feature-3.png';
import iconFeature4 from '../../assets/images/icon-feature-4.png';
import iconFeature5 from '../../assets/images/icon-feature-5.png';
import iconFeature6 from '../../assets/images/icon-feature-6.png';

const baseUrl = process.env.S3_BUCKET

const PlatformDashboardPage = (props) => {

  return (
    <Default className={ commonStyles.body } {...props} fullWidth whiteLogo coloredHeader={ true } headerHideSignUp={ true }>
      <div className={ `${styles.platformDashboardBg} ${styles.platformInnerHero} ${styles.heroSectionWrapper}` }>
        <div className={ `${styles.heroContainer} ${commonStyles.container}` }>
          <div className={ styles.heroPrimeImage }>
            <img src={iconDashboard} alt="" />
          </div>
          <h2 className={ `${commonStyles.white} ${commonStyles.textCenter} ${commonStyles.medium}` }>
            serverless
          </h2>
          <h1 className={ `${commonStyles.white} ${commonStyles.textCenter}`}>
            dashboard
          </h1>
          <div className={ `${styles.helfPad} ${styles.heroDesc} ${commonStyles.textCenter}` }>
            Visualize, monitor & collaborate on serverless applications
          </div>
          <div className={ `${styles.heroContactWrapper} ${commonStyles.textCenter}` }>
            <a className={ `${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}` }>sign up</a>
            <a className={ `${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}` }>contact sales</a>
          </div>
          <div className={ styles.heroPrimeImage }>
            <img src={Illustration} alt="" />
          </div>
          <div className={styles.heroBulletsAlternate}>
            <div className={styles.heroBullets}>
              <h3 className={commonStyles.white}>Visualize Your Applications</h3>
              <p>The Serverless Dashboard gives your team a shared overview of the functions, events, and subscriptions that make up your serverless application.</p>
            </div>
            <div className={styles.heroBullets}>
              <h3 className={commonStyles.white}>Streamline Development</h3>
              <p>View your application logs and metrics from within the UI to ease debugging and increase velocity.</p>
            </div>
            <div className={styles.heroBullets}>
              <h3 className={commonStyles.white}>Collaborate & Manage Access</h3>
              <p>Control your security and compliance needs by managing which team members have access to which cloud resources.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whiteSectionWrapper}>
        <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
          <UseCasesSection
            title="Serverless Dashboard Use Cases"
            description="These are the 3 main use cases for the Serverless Dashboard that you should know about."
            usecases={[
              {
                title: 'Onboarding new team members',
                description: 'The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.',
                image: IllustrationPart1,
              },
              {
                title: 'Operating at scale',
                description: 'The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.',
                image: IllustrationPart2,
              },
              {
                title: 'Operate applications, not infrastructure',
                description: 'The Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production.',
                image: IllustrationPart3,
              },
            ]}
          />
        </div>
      </div>

      <SectionSeperator />

      <div className={`${styles.footerPrevPad} ${styles.whiteSectionWrapper}`}>
        <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
          <Features features={[
            {
              title: 'Architecture Visualization',
              description: 'Let your team share the functions, events, and subscriptions that make up your serverless application.',
              image: iconFeature1
            },
            {
              title: 'Easy Logs',
              description: 'Access logs from within the dashboard, making it easier to debug and deploy your serverless applications.',
              image: iconFeature2
            },
            {
              title: 'User Access Control',
              description: 'Manage which team members have access to which cloud resources, making security and compliance for serverless seamless.',
              image: iconFeature3
            },
            {
              title: 'Application Metrics',
              description: 'View all vital serverless application metrics in one place, making serverless operations simple and intuitive.',
              image: iconFeature4
            },
            {
              title: 'Streaming Events',
              description: 'Data streams in your application become events. Centralize events from any cloud provider to get a birdâ€™s eye view of all the data flowing through your cloud.',
              image: iconFeature5
            },
            {
              title: 'Audit Logs',
              description: 'View and manage key operations events, such as deployments, in one single place for all your serverless applications.',
              image: iconFeature6
            }
          ]} />
        </div>
      </div>
    </Default>
  )
}

PlatformDashboardPage.hasLoadingState = true

export default PlatformDashboardPage
