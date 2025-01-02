import React, { useState } from 'react'
import Invoicenav from './Custome_invoice_Table'
import InvoiceData from './custome_invoice_Table_data'
import NavTabs from './Custom_Migration_tabs'


const indiaTabData = [
    { href: '#First_year', label: '2022' },
    { href: '#Second_year', label: '2023' },
    { href: '#Third_year', label: '2024' },
    // Add more tabs as needed
  ];
  
  const floridaTabData = [
    { href: '#First_year_FL', label: '2022 FL' },
    { href: '#Second_year_FL', label: '2023 FL' },
    { href: '#Third_year_FL', label: '2024 FL' },
    // Add more tabs as needed
  ];
  
  const First_year = [
    {
        month: 'January 2022',
        value1: '35,114',
        nextMonth: 'February 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'March 2022',
        value1: '35,114',
        nextMonth: 'April 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'May 2022',
        value1: '35,114',
        nextMonth: 'June 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'July 2022',
        value1: '35,114',
        nextMonth: 'Augest 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'September 2022',
        value1: '35,114',
        nextMonth: 'Octomber 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'November 2022',
        value1: '35,114',
        nextMonth: 'December 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    // Define your data here
  ];
  
  const Second_year = [
        {
        month: 'January 2023',
        value1: '35,114',
        nextMonth: 'February 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'March 2023',
        value1: '35,114',
        nextMonth: 'April 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'May 2023',
        value1: '35,114',
        nextMonth: 'June 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'July 2023',
        value1: '35,114',
        nextMonth: 'Augest 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'September 2023',
        value1: '35,114',
        nextMonth: 'Octomber 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'November 2023',
        value1: '35,114',
        nextMonth: 'December 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    // Define your data here
  ];
  
  const Third_year = [
    {
                month: 'January 2024',
                value1: '35,114',
                nextMonth: 'February 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'March 2024',
                value1: '35,114',
                nextMonth: 'April 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'May 2024',
                value1: '35,114',
                nextMonth: 'June 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'July 2024',
                value1: '35,114',
                nextMonth: 'Augest 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'September 2024',
                value1: '35,114',
                nextMonth: 'Octomber 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'November 2024',
                value1: '35,114',
                nextMonth: 'December 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
    // Define your data here
  ];
  
  const Default = [
    {
                month: 'Default Month',
                value1: '0',
                nextMonth: 'Default Next Month',
                value2: '0',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: '#',
              },
    // Define your default data here
  ];
  
  const First_year_FL = [
    {
        month: 'January 2022',
        value1: '35,114',
        nextMonth: 'February 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'March 2022',
        value1: '35,114',
        nextMonth: 'April 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'May 2022',
        value1: '35,114',
        nextMonth: 'June 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'July 2022',
        value1: '35,114',
        nextMonth: 'Augest 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'September 2022',
        value1: '35,114',
        nextMonth: 'Octomber 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'November 2022',
        value1: '35,114',
        nextMonth: 'December 2022',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    // Define your data here
  ];
  
  const Second_year_FL = [
        {
        month: 'January 2023',
        value1: '35,114',
        nextMonth: 'February 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'March 2023',
        value1: '35,114',
        nextMonth: 'April 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'May 2023',
        value1: '35,114',
        nextMonth: 'June 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'July 2023',
        value1: '35,114',
        nextMonth: 'Augest 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'September 2023',
        value1: '35,114',
        nextMonth: 'Octomber 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    {
        month: 'November 2023',
        value1: '35,114',
        nextMonth: 'December 2023',
        value2: '72,064',
        image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
        link: 'apps-nft-item-details.html',
    },
    // Define your data here
  ];
  
  const Third_year_FL = [
    {
                month: 'January 2024',
                value1: '35,114',
                nextMonth: 'February 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'March 2024',
                value1: '35,114',
                nextMonth: 'April 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'May 2024',
                value1: '35,114',
                nextMonth: 'June 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'July 2024',
                value1: '35,114',
                nextMonth: 'Augest 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'September 2024',
                value1: '35,114',
                nextMonth: 'Octomber 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
            {
                month: 'November 2024',
                value1: '35,114',
                nextMonth: 'December 2024',
                value2: '72,064',
                image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
                link: 'apps-nft-item-details.html',
            },
    // Define your data here
  ];

// const tabData2 = [
//     { href: '#First_year', icon: 'ri-airplay-fill', label: '2022' },
//     { href: '#Second_year', icon: 'ri-list-unordered', label: '2023' },
//     { href: '#Theird_year', icon: 'ri-list-unordered', label: '2024' },
//     // Add more tabs as needed
// ];
// const First_year = [

//     // Add more rows as needed
// ];

// const Second_year = [
//     {
//         month: 'January 2023',
//         value1: '35,114',
//         nextMonth: 'February 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'March 2023',
//         value1: '35,114',
//         nextMonth: 'April 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'May 2023',
//         value1: '35,114',
//         nextMonth: 'June 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'July 2023',
//         value1: '35,114',
//         nextMonth: 'Augest 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'September 2023',
//         value1: '35,114',
//         nextMonth: 'Octomber 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'November 2023',
//         value1: '35,114',
//         nextMonth: 'December 2023',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
  
//     // Add more rows as needed
// ];
// const Theird_year = [
    
//     // Add more rows as needed

//     {
//         month: 'January 2024',
//         value1: '35,114',
//         nextMonth: 'February 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'March 2024',
//         value1: '35,114',
//         nextMonth: 'April 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'May 2024',
//         value1: '35,114',
//         nextMonth: 'June 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'July 2024',
//         value1: '35,114',
//         nextMonth: 'Augest 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'September 2024',
//         value1: '35,114',
//         nextMonth: 'Octomber 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
//     {
//         month: 'November 2024',
//         value1: '35,114',
//         nextMonth: 'December 2024',
//         value2: '72,064',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: 'apps-nft-item-details.html',
//     },
// ];

// const Default = [
//     {
//         month: 'Default Month',
//         value1: '0',
//         nextMonth: 'Default Next Month',
//         value2: '0',
//         image: 'https://img.themesbrand.com/velzon/images/img-4.gif',
//         link: '#',
//       },
// ];
const Invoice = () => {


    const [activeMainTab, setActiveMainTab] = useState('#florida');
    const [activeSubTab, setActiveSubTab] = useState(floridaTabData[0].href);
  
    const handleMainTabClick = (tab) => {
      setActiveMainTab(tab);
      setActiveSubTab(tab === '#florida' ? floridaTabData[0].href : indiaTabData[0].href);
    };
  
    const handleSubTabClick = (tab) => {
      setActiveSubTab(tab);
    };
  
    let subTabData = activeMainTab === '#florida' ? floridaTabData : indiaTabData;
  
    let activeData;
    switch (activeSubTab) {
      case '#First_year':
        activeData = First_year;
        break;
      case '#Second_year':
        activeData = Second_year;
        break;
      case '#Third_year':
        activeData = Third_year;
        break;
      case '#First_year_FL':
        activeData = First_year_FL;
        break;
      case '#Second_year_FL':
        activeData = Second_year_FL;
        break;
      case '#Third_year_FL':
        activeData = Third_year_FL;
        break;
       
      default:
        activeData = Default;
    }

    // const [activeTab, setActiveTab] = useState(tabData2[0].href);

    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };
    // let activeData;
    // switch (activeTab) {
    //     case '#First_year':
    //         activeData = First_year;
    //         break;
    //     case '#Second_year':
    //         activeData = Second_year;
    //     case '#Theird_year':
    //         activeData = Theird_year;
    //         break;
    //     // Add cases for other tabs as needed
    //     default:
    //         activeData = Default;
    // }
  return (
 
    <>
     <NavTabs tabs={[
        { href: '#india', label: 'India' },
        { href: '#florida', label: 'Florida' }
      ]} onTabClick={handleMainTabClick} activeTab={activeMainTab} />
      <div className="tab-content border border-top-0 p-4" id="nav-tabContent">
        <div className={`tab-pane fade show active`}>
          <div className="table-responsive">
    
            <Invoicenav tabs={subTabData} onTabClick={handleSubTabClick} activeTab={activeSubTab} />
            <div className="tab-content">
              {subTabData.map((tab) => (
                <div key={tab.href} className={`tab-pane fade ${activeSubTab === tab.href ? 'show active' : ''}`}>
                  <InvoiceData data={activeData} />
                </div>
              ))}
              {/* Add more tab panes as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //    <div>
    //                                                                 <Invoicenav tabs={tabData2} onTabClick={handleTabClick} activeTab={activeTab} />
    //                                                                 <div className="tab-content">
    //                                                                     <div className={`tab-pane fade ${activeTab === '#First_year' ? 'show active' : ''}`}>
    //                                                                         <InvoiceData data={First_year} />
    //                                                                     </div>
    //                                                                     <div className={`tab-pane fade ${activeTab === '#Second_year' ? 'show active' : ''}`}>
    //                                                                         <InvoiceData data={Second_year} />
    //                                                                     </div>
    //                                                                     <div className={`tab-pane fade ${activeTab === '#Theird_year' ? 'show active' : ''}`}>
    //                                                                         <InvoiceData data={Theird_year} />
    //                                                                     </div>
    //                                                                     <div className={`tab-pane fade ${activeTab === 'Default' ? 'show active' : ''}`}>
    //                                                                         <InvoiceData data={Default} />
    //                                                                     </div>
    //                                                                     {/* Add more tab panes as needed */}
    //                                                                 </div>
    //                                                             </div>

    // </div>
  )
}

export default Invoice
