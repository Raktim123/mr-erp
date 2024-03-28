import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const Nav = () => {
  return (
    <aside className="nav nav--nav-open">
    <div className="nav__scroll" style={{width: "100%"}}>
      <nav className="nav__wrap">
        <div className="nav-group Collections" id="nav-group-Collections">
          <button
            className="nav-group__toggle nav-group__toggle--open"
            tabIndex={0}
            type="button"
          >
            <div className="nav-group__label">Collections</div>
            <div className="nav-group__indicator">
              <svg
                className="icon icon--chevron nav-group__indicator"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                style={{ transform: "rotate(180deg)" }}
              >
                <path
                  className="stroke"
                  d="M1.42871 1.5332L4.42707 4.96177L7.42543 1.5332"
                />
              </svg>
            </div>
          </button>
          <div
            aria-hidden="false"
            className="rah-static rah-static--height-auto"
            style={{ height: "auto" }}
          >
            <div style={{}}>
              <div className="nav-group__content">
                <a
                  className="nav__link"
                  id="nav-users"
                  href="/admin/collections/users"
                >
                 <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22px" height="22px"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                  </span>
                  <span className="nav__link-label">Users</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-documents"
                  href="/admin/collections/documents"
                >
                  <span className="nav__link-icon">
                    <svg id="Layer_1" height="22px" viewBox="0 0 24 24" width="22px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"/></svg>
                  </span>
                  <span className="nav__link-label">Documents</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-media"
                  href="/admin/collections/media"
                >
                  <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22px" height="22px"><path d="m5,4.146V0h-2v4.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v13.146h2v-13.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm-1,4.854c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm9,4.146V0h-2v13.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v4.146h2v-4.146c1.444-.431,2.5-1.772,2.5-3.354s-1.056-2.923-2.5-3.354Zm-1,4.854c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm11.5-10.5c0-1.582-1.056-2.923-2.5-3.354V0h-2v4.146c-1.444.431-2.5,1.772-2.5,3.354s1.056,2.923,2.5,3.354v13.146h2v-13.146c1.444-.431,2.5-1.772,2.5-3.354Zm-3.5,1.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/></svg>
                  </span>
                  <span className="nav__link-label">Media</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-leads"
                  href="/admin/collections/leads"
                >
                  <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22px" height="22px"><path d="m18.5,0H7.5c-1.956,0-3.624,1.254-4.243,3h-1.757c-.276,0-.5.224-.5.5s.224.5.5.5h1.528c-.018.164-.028.331-.028.5v2.5h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v3.5h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v3.5h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v2.5c0,.169.01.336.028.5h-1.528c-.276,0-.5.224-.5.5s.224.5.5.5h1.757c.619,1.746,2.287,3,4.243,3h11c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H7.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v15Zm-9-7.5c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm5,11v.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.5c0-2.206-1.794-4-4-4s-4,1.794-4,4v.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.5c0-2.757,2.243-5,5-5s5,2.243,5,5Z"/></svg>
                  </span>
                  <span className="nav__link-label">Leads</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-colleges"
                  href="/admin/collections/colleges"
                >
                  <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22px" height="22px"><path d="M19,6H14.321A3.95,3.95,0,0,0,13,5.388V5l3.53-1.652a1,1,0,0,0,0-1.7l-3.2-1.5A1.637,1.637,0,0,0,11,1.636V5.388A3.937,3.937,0,0,0,9.68,6H5a5.006,5.006,0,0,0-5,5V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11A5.006,5.006,0,0,0,19,6Zm2.816,4H19.657a3.017,3.017,0,0,1-2.121-.879L16.414,8H19A3,3,0,0,1,21.816,10ZM5,8H7.586L6.464,9.121A3.017,3.017,0,0,1,4.343,10H2.184A3,3,0,0,1,5,8Zm8,14H11V19a1,1,0,0,1,2,0Zm8,0H15V19a3,3,0,0,0-6,0v3H3a1,1,0,0,1-1-1V12H4.343a4.968,4.968,0,0,0,3.535-1.465l2.708-2.707a2,2,0,0,1,2.828,0l2.708,2.707A4.968,4.968,0,0,0,19.657,12H22v9A1,1,0,0,1,21,22ZM7,15a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,15Zm0,4a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,19Zm13-4a1,1,0,0,1-1,1H18a1,1,0,0,1,0-2h1A1,1,0,0,1,20,15Zm0,4a1,1,0,0,1-1,1H18a1,1,0,0,1,0-2h1A1,1,0,0,1,20,19Zm-6-7a2,2,0,1,1-2-2A2,2,0,0,1,14,12Z"/></svg>
                  </span>
                  <span className="nav__link-label">Colleges</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-courses"
                  href="/admin/collections/courses"
                >
                  <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22px" height="22px">
                        <path d="m17.846,14.217l-4.393-1.892c-.937-.403-2.012-.403-2.948.002h0s-4.365,1.89-4.365,1.89c-.723.313-1.172.997-1.173,1.784s.447,1.472,1.168,1.787l1.865.814v2.592c0,.974.57,1.866,1.454,2.273.769.354,1.625.533,2.546.533s1.777-.18,2.548-.533c.882-.407,1.452-1.3,1.452-2.273v-2.6l1-.434v2.841c0,.553.447,1,1,1s1-.447,1-1c0,0,0-4.947,0-5,0-.777-.441-1.478-1.154-1.783Zm-6.546-.054c.432-.188.93-.188,1.362-.002l4.35,1.777c0,.014-.007.025-.008.039l-4.335,1.883c-.436.189-.936.189-1.372-.002l-4.363-1.805,4.365-1.89Zm2.7,7.03c0,.199-.111.375-.289.457-1.01.463-2.413.463-3.421,0-.179-.082-.29-.258-.29-.457v-1.719l.498.217c.473.206.98.309,1.488.309.505,0,1.01-.102,1.481-.307l.533-.232v1.732ZM7,4.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5ZM19,0H5C2.243,0,0,2.243,0,5v12c0,2.757,2.243,5,5,5,.552,0,1-.447,1-1s-.448-1-1-1c-1.654,0-3-1.346-3-3v-8h20v8c0,.731-.266,1.436-.749,1.983-.365.414-.326,1.046.089,1.411.412.365,1.045.327,1.411-.089.806-.912,1.249-2.087,1.249-3.306V5c0-2.757-2.243-5-5-5ZM2,7v-2c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v2H2Z"/>
                    </svg>
                  </span>
                  <span className="nav__link-label">Courses</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-students"
                  href="/admin/collections/students"
                >
                  <span className="nav__link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22px" height="22px">
                        <path d="m22,4.498c.001-.735-.428-1.37-1.094-1.618L14.173.373c-1.369-.509-2.876-.511-4.247-.006L3.111,2.883c-.668.247-1.099.881-1.099,1.617,0,.736.432,1.371,1.1,1.616l2.888,1.063v1.82c0,3.309,2.691,6,6,6s6-2.691,6-6v-1.821s2.965-1.107,3-1.123v5.444c0,.276.224.5.5.5s.5-.224.5-.5v-7s0,0,0,0c0,0,0,0,0-.001Zm-5,4.502c0,2.757-2.243,5-5,5s-5-2.243-5-5v-1.452l2.889,1.064c.68.25,1.395.375,2.109.375s1.429-.125,2.109-.375l2.892-1.064v1.453Zm3.555-3.827l-6.792,2.5c-1.138.419-2.391.419-3.527,0l-6.777-2.495c-.329-.121-.446-.43-.446-.678s.117-.557.445-.678l6.816-2.516c.57-.211,1.169-.316,1.769-.316.604,0,1.208.107,1.782.321l6.733,2.507c.327.122.443.431.443.679,0,.249-.118.557-.445.677Zm.422,18.177c.083.263-.063.544-.327.627-.05.016-.101.023-.15.023-.213,0-.41-.136-.477-.35-1.046-3.327-4.346-5.65-8.023-5.65s-6.977,2.323-8.023,5.65c-.083.264-.363.41-.627.327s-.41-.364-.327-.627c1.176-3.739,4.868-6.35,8.977-6.35s7.801,2.611,8.977,6.35Z"/>
                    </svg>
                  </span>
                  <span className="nav__link-label">Students</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-payments"
                  href="/admin/collections/payments"
                >
                  <span className="nav__link-icon">
                    <svg
                      className="icon icon--chevron"
                      viewBox="0 0 9 7"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <path
                        className="stroke"
                        d="M1.42871 1.5332L4.42707 4.96177L7.42543 1.5332"
                      />
                    </svg>
                  </span>
                  <span className="nav__link-label">Payments</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-holidays"
                  href="/admin/collections/holidays"
                >
                  <span className="nav__link-icon">
                    <svg
                      className="icon icon--chevron"
                      viewBox="0 0 9 7"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <path
                        className="stroke"
                        d="M1.42871 1.5332L4.42707 4.96177L7.42543 1.5332"
                      />
                    </svg>
                  </span>
                  <span className="nav__link-label">Holidays</span>
                </a>
                <a
                  className="nav__link"
                  id="nav-employees"
                  href="/admin/collections/employees"
                >
                  <span className="nav__link-icon">
                    <svg
                      className="icon icon--chevron"
                      viewBox="0 0 9 7"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <path
                        className="stroke"
                        d="M1.42871 1.5332L4.42707 4.96177L7.42543 1.5332"
                      />
                    </svg>
                  </span>
                  <span className="nav__link-label">Employees</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav__controls">
          <a
            aria-label="Log out"
            className="nav__log-out"
            tabIndex={0}
            href="/admin/logout"
          >
            <svg
              className="icon icon--logout"
              fill="none"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="stroke" d="M10 5H18V19H10" />
              <g>
                <path className="stroke" d="M8 8.5L4.46447 12.0355L8 15.5711" />
                <line className="stroke" x1={5} x2={13} y1={12} y2={12} />
              </g>
            </svg>
          </a>
        </div>
      </nav>
    </div>
    <div className="nav__header">
      <div className="nav__header-content">
        <button className="nav__mobile-close" type="button">
          <div className="hamburger">
            <div className="hamburger__wrapper">
              <div className="hamburger__icon">
                <div
                  aria-label="Close"
                  className="hamburger__close-icon"
                  title="Close"
                >
                  <div className="hamburger__line hamburger__x-left" />
                  <div className="hamburger__line hamburger__x-right" />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </aside>
  )
}

export default Nav