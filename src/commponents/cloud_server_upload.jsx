import React from 'react'
import { Link } from 'react-router-dom'
const cloud_server_upload = () => {
  return (
    <>
          <div  className="main-content">
        <div  className="page-content">
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-12">
                        <div  className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4  className="mb-sm-0">IIS Server Uploadation Process</h4>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-lg-12">
                        <div>
                            <div  className="timeline">
                                <div  className="timeline-item left">
                                    <i  className="icon ri-stack-line"></i>
                                    <div  className="date">
                                        <a href="Documents/vm-SSWhite.rdp">Download RDP File</a>
                                        <br />
                                        <br />
                                        <a href="https://portal.azure.com/#@sswaisswhite.onmicrosoft.com/resource/subscriptions/071fc751-af2e-4e99-a173-e0639c11b771/resourceGroups/rgSSWhite/providers/Microsoft.Compute/virtualMachines/vm-SSWhite/connect">Download RDP From Azure</a>
                                    </div>
                                    <div  className="content">
                                        <div  className="d-flex">
                                            <div  className="flex-grow-1 ms-3">
                                                <h5>Assigning a New IP Address</h5>
                                                <p  className="text-muted mb-2">
                                                    <strong>Allocate a Public IP Address:
                                                    </strong>Go to the Azure Portal (portal.azure.com) and navigate to the desired resource group or create a new one.
                                                    Click on "Create a resource," search for "Public IP address," and select it.
                                                    Configure the IP address settings (dynamic or static) and associate it with your Azure resource or service. Follow the prompts to create the IP.                                                   
                                                     <br />
                                                    <br />
                                                    <strong>Attach the Public IP to your Azure Virtual Machine (VM)::
                                                    </strong>Go to the Virtual Machines section in the Azure Portal.
                                                    Select your VM, go to "Networking," and then to the "Network interfaces" section.
                                                    Select the network interface associated with your VM and click on "IP configurations."
                                                    Associate the previously created Public IP address with the VM's network interface.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="timeline-item right">
                                    <i  className="icon ri-vip-diamond-line"></i>
                                    <div  className="date">
                                        <Link href="Documents/Cloud_Server_Uploadation.docx">Download document</Link>
                                    </div>
                                    <div  className="content">
                                        <h5>Creating a New Website</h5>
                                        <p  className="text-muted mb-2">
                                            <strong>Set Up a Web App:
                                            </strong>Navigate to the Azure Portal and click on "Create a resource."
                                            Search for "Web App" and select it.
                                            Configure the settings like resource group, app name, runtime stack, OS, and region.
                                            Follow the prompts to create the Web App.
                                             <br />
                                            <br />
                                            <strong>Configure the Website</strong>Access the Web App resource you created.
                                            Under the settings for the Web App, you can configure custom domains, SSL settings, deployment options, etc.
                                            Upload your website files or set up deployment through continuous integration tools like Azure DevOps or GitHub Actions
                                            <br />
                                            <br />
                                            <strong>Set DNS and Networking (Optional): </strong>If you want to associate a custom domain, go to the Web App's settings, and configure custom domains. Update your DNS settings to point to the Azure Web App's URL or the Public IP address.<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default cloud_server_upload
