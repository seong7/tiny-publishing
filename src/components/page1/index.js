import React from 'react';
import Page1 from './Page1';
import './Page1.css';

export default function Page1Layout() {
  return (
    <Page1>
      <Page1.Header />

      <Page1.Title />

      {/* Content  영역 */}
      <Page1.ContentWrapper className="pb-0">
        <Page1.Add />
      </Page1.ContentWrapper>

      <Page1.ContentWrapper>
        <Page1.Contents.TextEditor
          title="Powering More Than 40% of the World’s Websites"
          subtitle="Rich text editor platforms that enable nontechnical users to create great content for your website or application."
          icons={[
            {
              iconName: 'ToolOutlined',
              title: 'TinyMCE',
              subtitle: 'Highly configurable with a large ecosystem.',
            },
            {
              iconName: 'MobileOutlined',
              title: 'Textbox.io',
              subtitle: 'Modern, mobile-ready and enterprise-grade.',
            },
            {
              iconName: 'CoffeeOutlined',
              title: 'EditLive',
              subtitle: 'Advanced and Java-based.',
            },
          ]}
        />
      </Page1.ContentWrapper>

      <Page1.WideBackground>
        <div className="content__ibm-img" />
        <Page1.ContentWrapper>
          <Page1.Contents.IBM
            title="Content Creation Solutions for IBM Software"
            subtitle="Boost the adoption of IBM’s social software and digital experience suites."
            icons={[
              {
                iconName: 'ShareAltOutlined',
                title: 'Textbox.io for IBM Connections',
                subtitle:
                  'Take wiki, blog and profile editing to the next level.',
              },
              {
                iconName: 'FormOutlined',
                title: 'Textbox.io for IBM WCM',
                subtitle: 'A great digital experience requires great content.',
              },
            ]}
          />
        </Page1.ContentWrapper>
      </Page1.WideBackground>

      <Page1.ContentWrapper>
        <Page1.Contents.FileAndImage
          title="Manage Files and Images"
          subtitle="Developer libraries for uploading and managing images and other files make content management easy."
          icons={[
            {
              iconName: 'FolderOpenFilled',
              title: 'MoxieManager',
              subtitle:
                'Store and edit images and files on your web server, or using cloud services such as Amazon S3, Azure, Dropbox or Google Drive.',
            },
            {
              iconName: 'UploadOutlined',
              title: 'Plupload',
              subtitle:
                'Provide dynamic file upload for any browser. Plupload is a developer’s Swiss Army Knife for upload and file handling on the web.',
            },
          ]}
        />
      </Page1.ContentWrapper>

      <Page1.WideBackground>
        <Page1.ContentWrapper>
          <Page1.Contents.Websites
            title="Join the World’s Leading Developers"
            subtitle="Over 40% of the world’s websites are created with Tiny editing technology."
            websites={[
              { imgSrc: '/image/Blackboard_logo.png' },
              { imgSrc: '/image/Survey_Monkey_logo.png' },
              { imgSrc: '/image/Constant_Contact_logo.png' },
              { imgSrc: '/image/Eventbrite_logo.png' },
              { imgSrc: '/image/Evernote_logo.png' },
              { imgSrc: '/image/IBM_logo.png' },
              { imgSrc: '/image/LinkedIn_Logo.svg' },
              { imgSrc: '/image/Marketo_logo.png' },
              { imgSrc: '/image/Microsoft_logo.png' },
              { imgSrc: '/image/Wordpress_logo.png' },
              { imgSrc: '/image/Zendesk_logo.png' },
              { imgSrc: '/image/OpenText.png' },
            ]}
          />
        </Page1.ContentWrapper>
      </Page1.WideBackground>

      <Page1.ContentWrapper>
        <Page1.Contents.Reviews
          reviews={[
            {
              imgSrc: '/image/patrick.jpeg',
              review:
                'TinyMCE is one of those “cornerstone” products on the web.',
              reviewer: 'Patrick Coombe',
              companyAndPosition: 'CEO, Elite Strategies LLC',
            },
            {
              imgSrc: '/image/Alexander.jpeg',
              review:
                'This is one of the web’s unsung heroes. Regularly updated, easy to use and powerful.',
              reviewer: 'J. Alexander Curtis',
              companyAndPosition: 'Co-Founder, OhMyTix',
            },
          ]}
        />
      </Page1.ContentWrapper>

      <Page1.WideBackground>
        <Page1.ContentWrapper>
          <Page1.Contents.TinyNumbers
            data={[
              {
                number: '100M',
                explanation: 'Websites Powered',
              },
              {
                number: '1.2B',
                explanation: 'Hits on our CDN',
              },
              {
                number: '15M',
                explanation: 'Direct Downloads',
              },
              {
                number: '1.5M',
                explanation: 'Developers',
              },
            ]}
          />
        </Page1.ContentWrapper>
      </Page1.WideBackground>

      <Page1.ContentWrapper>
        <Page1.Contents.AdditionalLinks
          icons={[
            {
              iconName: 'QuestionOutlined',
              title: 'Support teams across the world',
            },
            {
              iconName: 'BookOutlined',
              title: 'Comprehensive developer docs',
            },
            {
              iconName: 'UploadOutlined',
              title: '19 years of profitable growth',
            },
          ]}
        />
      </Page1.ContentWrapper>

      {/* Footer  영역 */}
      <Page1.WideBackground className="footer-blue">
        <Page1.ContentWrapper>
          <Page1.Footer.Contact />
        </Page1.ContentWrapper>
      </Page1.WideBackground>

      <Page1.WideBackground className="footer-gray">
        <Page1.ContentWrapper>
          <Page1.Footer.About />
        </Page1.ContentWrapper>
      </Page1.WideBackground>

      <Page1.Footer.Copyright />
    </Page1>
  );
}
