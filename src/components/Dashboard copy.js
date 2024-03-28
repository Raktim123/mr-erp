import React from 'react'

const Dashboard = () => {
  const [state, sueState] = React.useState('')
  return (
    <div className='dashboard-container'>
      <div class="dashboard">
        <div class="gutter--left gutter--right dashboard__wrap">
          <div class="dashboard__group">
            <h2 class="dashboard__label">Dashboard</h2>
            <ul class="dashboard__card-list">
                <li onClick={() => sueState('CRM')}>
                  <div class="card card-users card--has-onclick" id="card-users" style={{ backgroundColor: '#fb275d' }}>
                    <h2 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>CRM Dashboard</h2>
                  </div>
                </li>
                
                <li onClick={() => sueState('ACCOUNT')}>
                  <div class="card card-documents card--has-onclick" id="card-documents" style={{ backgroundColor: '#6161ff' }}>
                    <h2 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Account Dashboard</h2>
                    <a type="button" aria-label="Show all Documents"
                      class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                        class="btn__content"></span></a>
                  </div>
                </li>
              
                <li onClick={() => sueState('AGENT')}>
                  <div class="card card-media card--has-onclick" id="card-media" style={{ backgroundColor: '#00ca72' }}>
                    <h2 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Agent Dashboard</h2>
                    <a type="button" aria-label="Show all Media"
                      class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                        class="btn__content"></span></a>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="dashboard" id="crm">
          <div class="gutter--left gutter--right dashboard__wrap">
            <div class="dashboard__group">
              <h2 class="dashboard__label">CRM</h2>
              <ul class="dashboard__card-list">
                <li>
                  <div class="card card-users card--has-onclick" id="card-users" style={{ backgroundColor: '#00c875' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Users</h3>
                    <div class="card__actions"><a aria-label="Create new User"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/users/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" aria-label="Show all Users" href="/admin/collections/users/"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-documents card--has-onclick" id="card-documents" style={{ backgroundColor: '#fdab3d' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Documents</h3>
                    <div class="card__actions"><a aria-label="Create new Document"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/documents/create"><span
                        class="btn__content"><span class="btn__icon"><svg class="icon icon--plus"
                          viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/documents/"
                          aria-label="Show all Documents"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-media card--has-onclick" id="card-media" style={{ backgroundColor: '#e2445c' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Media</h3>
                    <div class="card__actions"><a aria-label="Create new Media"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/media/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" aria-label="Show all Media" href="/admin/collections/media/"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-lead-status card--has-onclick" id="card-lead-status" style={{ backgroundColor: '#bda8f9' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Lead Statuses</h3>
                    <div class="card__actions"><a aria-label="Create new Lead Status"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/lead-status/create"><span
                        class="btn__content"><span class="btn__icon"><svg class="icon icon--plus"
                          viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/lead-status/"
                          aria-label="Show all Lead Statuses"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-leads card--has-onclick" id="card-leads" style={{ backgroundColor: '#fdab3d' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Leads</h3>
                    <div class="card__actions"><a aria-label="Create new Lead"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/leads/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" aria-label="Show all Leads" href="/admin/collections/leads/"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
      
      <div class="dashboard" id="account">
        <div class="gutter--left gutter--right dashboard__wrap">
          <div class="dashboard__group">
            <h2 class="dashboard__label">Account</h2>
            <ul class="dashboard__card-list">
                <li>
                  <div class="card card-colleges card--has-onclick" id="card-colleges" style={{ backgroundColor: '#00c875'}}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Colleges</h3>
                    <div class="card__actions"><a aria-label="Create new College"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/colleges/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/colleges/"
                          aria-label="Show all Colleges"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-courses card--has-onclick" id="card-courses" style={{ backgroundColor: '#fdab3d' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Courses</h3>
                    <div class="card__actions"><a aria-label="Create new Course"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/courses/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/courses/"
                          aria-label="Show all Courses"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-students card--has-onclick" id="card-students" style={{ backgroundColor: '#e2445c' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Students</h3>
                    <div class="card__actions"><a aria-label="Create new Student"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/students/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/students/"
                          aria-label="Show all Students"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-payments card--has-onclick" id="card-payments" style={{ backgroundColor: '#bda8f9' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Payments</h3>
                    <div class="card__actions"><a aria-label="Create new Payment"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/payments/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/payments/"
                          aria-label="Show all Payments"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
            
      <div class="dashboard" id="agent">
        <div class="gutter--left gutter--right dashboard__wrap">
          <div class="dashboard__group">
            <h2 class="dashboard__label">HRMS</h2>
            <ul class="dashboard__card-list">
                <li>
                  <div class="card card-students card--has-onclick" id="card-students" style={{ backgroundColor: '#00c875' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Holidays</h3>
                    <div class="card__actions"><a aria-label="Create new Student"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                        type="button" href="/admin/collections/holidays/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/holidays/"
                          aria-label="Show all Students"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
                </li>
                <li>
                  <div class="card card-students card--has-onclick" id="card-students" style={{ backgroundColor: '#fdab3d' }}>
                    <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Employees</h3>
                    <div class="card__actions"><a aria-label="Create new Student"
                      class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                      type="button" href="/admin/collections/employees/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                          </line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                          </line>
                        </svg></span></span></a></div><a type="button" href="/admin/collections/employees/"
                          aria-label="Show all Students"
                          class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                            class="btn__content"></span></a>
                  </div>
              </li>  
              <li>
                <div class="card card-students card--has-onclick" id="card-students" style={{ backgroundColor: '#e2445c' }}>
                  <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Attendence</h3>
                  <div class="card__actions"><a aria-label="Create new Student"
                    class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    type="button" target="_blank" href="https://attendence.etcpromotion.co.in/"><span class="btn__content"><span
                      class="btn__icon"><svg class="icon icon--arrow" viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                        </line>
                        <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                        </line>
                      </svg></span></span></a></div><a type="button" target="_blank" href="https://attendence.etcpromotion.co.in/"
                        aria-label="Show all Students"
                        class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                          class="btn__content"></span></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="dashboard" id="agent">
        <div class="gutter--left gutter--right dashboard__wrap">
          <div class="dashboard__group">
            <h2 class="dashboard__label">Agent</h2>
            <ul class="dashboard__card-list">
              <li>
                <div class="card card-students card--has-onclick" id="card-students" style={{ backgroundColor: '#00c875' }}>
                  <h3 class="card__title" style={{ color: 'white', letterSpacing: '1.5px' }}>Students</h3>
                  <div class="card__actions"><a aria-label="Create new Student"
                    class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    type="button" href="/admin/collections/students/create"><span class="btn__content"><span
                      class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115">
                        </line>
                        <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594">
                        </line>
                      </svg></span></span></a></div><a type="button" href="/admin/collections/students/"
                        aria-label="Show all Students"
                        class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                          class="btn__content"></span></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard