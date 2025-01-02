import React from 'react'

const Custom_Migration_tabs = ({ tabs, onTabClick, activeTab }) => {
  return (
    <nav>
    <ul className="nav nav-tabs nav-tabs-custom nav-success" role="tablist">
      {tabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <a
            className={`nav-link fs-14 ${activeTab === tab.href ? 'active' : ''}`}
            data-bs-toggle="tab"
            href={tab.href}
            role="tab"
            onClick={() => onTabClick(tab.href)}
          >
            <i className={`${tab.icon} d-inline-block d-md-none`}></i>
            <span className="d-none d-md-inline-block">{tab.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Custom_Migration_tabs
