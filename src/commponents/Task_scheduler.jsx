import React from 'react'

const Task_scheduler = () => {
  return (
    <div>
              <div  className="main-content">
        <div  className="page-content">
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-12">
                        <div  className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4  className="mb-sm-0">Task Schedule</h4>

                            <div  className="page-title-right">
                                <ol  className="breadcrumb m-0">
                                    <li  className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                    <li  className="breadcrumb-item active">Privacy Policy</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <div  className="row justify-content-center">
                    <div  className="col-lg-10">
                        <div  className="card">
                            <div  className="bg-soft-warning position-relative">
                                <div  className="card-body p-5">
                                    <div  className="text-center">
                                        <h3>Task Scheduler Works</h3>
                                    </div>
                                </div>
 
                            </div>
                            <div  className="card-body p-4">
                                <div  className="d-flex">
                                    <div  className="flex-shrink-0 me-3">
                                        <i data-feather="check-circle"  className="text-success icon-dual-success icon-xs"></i>
                                    </div>
                                    <div  className="flex-grow-1">
                                        <h5>How to create and run task in Task Scheduler</h5>
                                        <p  className="text-muted">To create a task schedule for a C# project that needs to run daily for a web page, you can use the Windows Task Scheduler in combination with a console application or a script written in C# to automate this process. </p>
                                        <br />
                                        <img src="Images/iis_server.png" />
                                       &nbsp;&nbsp;
                                        <img src="Images/task_scheduler.png"   style={{height:"400px"}} />
                                        <p  className="text-muted">
                                            - Open the Windows Task Scheduler in IIS Server 
                                            <br />
                                            - Click on "Create Basic Task" or "Create Task" on the right sidebar we have created the folder name tasksendingmail for all our daily task, depending on your Windows version.
                                            <br />
                                            - Give your task a name and description.
                                            <br />
                                            - Set the trigger to "Daily."
                                            <br />
                                            -  Specify the start time and recurrence (daily).<br />
                                            -  Choose "Start a program" as the action and in action there in to add two arguments one in Program/script :- C:\Program and in the Add Arguments (Optional) textbox path of the webform you want to run ex:- "Files (x86)\Internet Explorer\iexplore http://192.168.1.44/newsreport1.aspx".
                                            <br />
                                            -  In the "Program/script" field, provide the path to your compiled console application or the script that contains the C# logic.
                                            <br />
                                            -  Click "Finish" to create the task.
                                        </p>
                                        <p  className="text-muted">
                                            Test your scheduled task by right-clicking on it in the Task Scheduler and selecting "Run." Check if it runs successfully.
                                        </p>
                                        <p  className="text-muted">Additional Tips:</p>
                                        <ul  className="text-muted">
                                            <li>
                                                <p>Ensure the user running the task has the necessary permissions to execute the task and access required resources.</p>
                                            </li>
                                            <li>
                                                <p>Handle any exceptions within your C# code to prevent unexpected errors during execution.</p>
                                            </li>
                                            <li>
                                                <p>Log the task output to a file or event log for easier debugging and monitoring</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    
  )
}

export default Task_scheduler
