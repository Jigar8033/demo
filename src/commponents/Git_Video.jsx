import React  from 'react'
import Toggle from './Toggule_button_Git_video'

const Git_Video = () => {
 
  return (
    <>
          <div  className="main-content">

<div  className="page-content">
    <div  className="container-fluid">

  
        <div  className="row">
            <div  className="col-12">
                <div  className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4  className="mb-sm-0">Embed Video</h4>

                    <div  className="page-title-right">
                        <ol  className="breadcrumb m-0">
                            <li  className="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                            <li  className="breadcrumb-item active">Embed Video</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
   
        <div  className="row">
            <div  className="col-xl-6">
            <Toggle   label="Ratio Video 16:9">
    
    {{
      code: (
        <div className="code-view">
          <pre className="language-markup">
            <code>{`<!-- Custom Ratio Video -->
<div className="ratio" style={{ aspectRatio: '16/9' }}>
<iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
</div>`}</code>
          </pre>
        </div>
      ),
      preview: (
        <div className="live-preview">
          <div className="ratio  ratio-16x9" style={{ aspectRatio: '16/9' }}>
            <iframe
              className="rounded"
              src="https://www.youtube.com/embed/1y_kfWUCFDQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )
    }}
  </Toggle>

  <Toggle   label="Ratio Video 4:3">
    
    {{
      code: (
        <div className="code-view">
          <pre className="language-markup">
            <code>{`<!-- Custom Ratio Video -->
<div className="ratio" style={{ aspectRatio: '4/3' }}>
<iframe src="https://www.youtube.com/watch?v=w8CkzOmN8PA" title="YouTube video" allowFullScreen></iframe>
</div>`}</code>
          </pre>
        </div>
      ),
      preview: (
        <div className="live-preview">
          <div className="ratio  ratio-4x3" style={{ aspectRatio: '4/3' }}>
            <iframe
              className="rounded"
              src="https://www.youtube.com/watch?v=w8CkzOmN8PA"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )
    }}
  </Toggle>

  <Toggle   label="Custom Ratios">
    
    {{
      code: (
        <div className="code-view">
          <pre className="language-markup">
            <code>{`<!-- Custom Ratio Video -->
<div className="ratio" style={{ aspectRatio: '2/1' }}>
<iframe src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowFullScreen></iframe>
</div>`}</code>
          </pre>
        </div>
      ),
      preview: (
        <div className="live-preview">
          <div className="ratio" style={{ aspectRatio: '2/1' }}>
            <iframe
              className="rounded"
              src="https://www.youtube.com/embed/2RZQN_ko0iU"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )
    }}
  </Toggle>
   </div>

            <div  className="col-xl-6">

            <Toggle   label="Ratio Video 21:9">
    
    {{
      code: (
        <div className="code-view">
          <pre className="language-markup">
            <code>{`<!-- Custom Ratio Video -->
<div className="ratio" style={{ aspectRatio: '21/9' }}>
<iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowFullScreen></iframe>
</div>`}</code>
          </pre>
        </div>
      ),
      preview: (
        <div className="live-preview">
          <div className="ratio ratio-21x9" style={{ aspectRatio: '21/9' }}>
            <iframe
              className="rounded"
              src="https://www.youtube.com/embed/Z-fV2lGKnnU"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )
    }}
  </Toggle>
            
                   <Toggle   label="Ratio Video 1:1">
    
        {{
          code: (
            <div className="code-view">
              <pre className="language-markup">
                <code>{`<!-- Custom Ratio Video -->
<div className="ratio" style={{ aspectRatio: '1/1' }}>
  <iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowFullScreen></iframe>
</div>`}</code>
              </pre>
            </div>
          ),
          preview: (
            <div className="live-preview">
              <div className="ratio  ratio-1x1" style={{ aspectRatio: '1/1' }}>
                <iframe
                  className="rounded"
                  src="https://www.youtube.com/embed/GfSZtaoc5bw"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )
        }}
      </Toggle>
                </div> 
            </div>
            </div>
            </div>
            
    
                 
                
    
 
 
 

<footer  className="footer">
    <div  className="container-fluid">
        <div  className="row">
            <div  className="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> © Velzon.
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

export default Git_Video
