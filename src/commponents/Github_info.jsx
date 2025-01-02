import React from 'react'

const Github_info = () => {
  return (
    <>
          <div  className="main-content">

<div  className="page-content">
    <div  className="container-fluid">

 
        <div  className="row">
            <div  className="col-12">
                <div  className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4  className="mb-sm-0">GitHub Info</h4>

                    <div  className="page-title-right">
                        <ol  className="breadcrumb m-0">
                            <li  className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                            <li  className="breadcrumb-item active">GITHUB INFO</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
 

        <div  className="row">
            <div  className="col-lg-12">
                <div  className="card">

                    <div>
                        <ul  className="nav nav-tabs nav-tabs-custom" role="tablist">
                            <li  className="nav-item">
                                <a  className="nav-link active" data-bs-toggle="tab" href="#all" role="tab" aria-selected="false">
                                    <i  className="ri-search-2-line text-muted align-bottom me-1"></i>Overview
                                </a>
                            </li>
                            <li  className="nav-item">
                                <a  className="nav-link" data-bs-toggle="tab" id="images-tab" href="#images" role="tab" aria-selected="true">
                                    <i  className="ri-image-fill text-muted align-bottom me-1"></i>GitHub Services and Offerings
                                </a>
                            </li>
                            <li  className="nav-item">
                                <a  className="nav-link" data-bs-toggle="tab" href="#news" role="tab" aria-selected="false">
                                    <i  className="ri-list-unordered text-muted align-bottom me-1"></i>Usage and Importance
                                </a>
                            </li>
                            <li  className="nav-item">
                                <a  className="nav-link" data-bs-toggle="tab" href="#video" role="tab" aria-selected="false">
                                    <i  className="ri-video-line text-muted align-bottom me-1"></i>Security and Privacy
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div  className="card-body p-4">
                        <div  className="tab-content text-muted">
                            <div  className="tab-pane active" id="all" role="tabpanel">
                                <div  className="pb-3">
                                    <p  className="text-muted mb-2">GitHub is a web-based platform and a widely used service for version control using Git. It provides hosting for software development and collaboration utilizing Git's distributed version control system. Here are some key points about GitHub:</p>
                                </div>
                                <div  className="border border-dashed"></div>

                                <div  className="py-3">
                                    <h5  className="mb-1"><a href="javascript:void(0);">Features of GitHub</a></h5>

                                    <p  className="text-muted mb-2">
                                        Repository Hosting:

GitHub hosts Git repositories, allowing users to store and manage their code, files, and project history.
It supports public repositories (visible to everyone) and private repositories (accessible to authorized collaborators).
Collaboration and Social Coding:

Facilitates collaboration among developers by providing tools like pull requests, code review, issue tracking, and project management.
Users can contribute to projects, fork repositories, and propose changes to the original codebase.
Community and Networking:

GitHub fosters a community where developers can discover, explore, and contribute to open-source projects.
Users can follow projects, star repositories, and engage with other developers.
Integrated Development Workflows:

Integrates with various development tools and services like CI/CD (Continuous Integration/Continuous Deployment) pipelines, code editors, and project management tools.
Documentation and Wikis:

Allows users to create and maintain project documentation, wikis, and README files to provide information about projects and guidelines for contributors.
                                    </p>
                                </div>
                                <div  className="border border-dashed"></div>

                            </div>
                            <div  className="tab-pane" id="images" role="tabpanel">

                                <div  className="pb-3">
                                    <p  className="text-muted mb-2">
                                        GitHub Actions:

Provides CI/CD capabilities, allowing users to automate workflows and build/test/deploy code directly from repositories.
GitHub Pages:

Enables users to host static websites directly from their GitHub repositories.
GitHub Enterprise:

Offers on-premises solutions for larger organizations, providing enhanced security, scalability, and management features.
                                    </p>
                                </div>
                                <div  className="border border-dashed"></div>

                            </div>
                        
                            <div  className="tab-pane" id="news" role="tabpanel">
                                <div  className="row">

                                    <div  className="pb-3">
                                        <p  className="text-muted mb-2">
                                            Open Source Development:

GitHub hosts numerous open-source projects, making it a hub for collaboration, contribution, and discovery of open-source software.
Professional and Personal Projects:

Developers and teams use GitHub for managing and collaborating on both professional and personal projects, leveraging its version control and collaboration features.
Learning and Education:

GitHub is a valuable resource for learning programming, as it allows users to access, explore, and contribute to codebases, tutorials, and educational materials.
                                        </p>
                                    </div>
                                    <div  className="border border-dashed"></div>

                                </div>
                            </div>
                   
                            <div  className="tab-pane" id="video" role="tabpanel">
                                <div  className="row">

                                    <div  className="pb-3">
                                        <p  className="text-muted mb-2">
                                            GitHub offers features like two-factor authentication, access control, and security advisories to maintain the security and privacy of repositories and user accounts.
                                        </p>
                                    </div>
                                    <div  className="border border-dashed"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    </div>
    
</div>
 

<footer  className="footer">
    <div  className="container-fluid">
        <div  className="row">
            <div  className="col-sm-6">
                <script>document.write(new Date().getFullYear())</script>
                © Velzon.
            </div>
            <div  className="col-sm-6">
                <div  className="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
    </>
  )
}

export default Github_info
