// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router'

// #endregion
import Dashboard from './dashboard'
import CourseExplorer from './courses/explorer'
import CourseEditor from './courses/editor'
import CoursePreview from './courses/preview'
import CourseViewer from './courses/viewer'
import Projects from './projects'
import Profile from './profile'
import Tests from './tests'

export const scopeRoot = '/schools'

export const SchoolsRouter = () => {
  return (
    <>
      <Route exact path={`${scopeRoot}/`}
        render={
          () => <Redirect to={`${scopeRoot}/courses`} />
        }
      />
      <Route exact path={`${scopeRoot}/dashboard`} render={ () => <Dashboard /> } />
      <Route exact path={`${scopeRoot}/projects`} render={ () => <Projects /> } />
      <Route exact path={`${scopeRoot}/courses`} render={ () => <CourseExplorer /> } />
      <Route exact path={`${scopeRoot}/courses/edit/:id`} render={ () => <CourseEditor /> } />
      <Route exact path={`${scopeRoot}/courses/:id`} render={ () => <CoursePreview /> } />
      <Route exact path={`${scopeRoot}/courses/:id/view`} render={ () => <CourseViewer /> } />
      <Route exact path={`${scopeRoot}/testing`} render={ () => <Tests /> } />
      <Route exact path={`${scopeRoot}/profile`} render={ () => <Profile /> } />
    </>
  )
}

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
    {
      name: 'Dashboard',
      path: `${scopeRoot}`,
      icon: 'solar-panel',
      onClick: () => goTo(`${scopeRoot}`)
    },
    {
      name: 'Courses',
      path: `${scopeRoot}/courses`,
      icon: 'graduation-cap',
      onClick: () => goTo(`${scopeRoot}/courses`)
    },
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Testing',
      path: `${scopeRoot}/testing`,
      icon: 'university',
      onClick: () => goTo(`${scopeRoot}/testing`)
    },
    {
      name: 'Projects',
      path: `${scopeRoot}/projects`,
      icon: 'folder',
      onClick: () => goTo(`${scopeRoot}/projects`)
    }
  ],
  all: [
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Dashboard',
      path: `${scopeRoot}`,
      icon: 'solar-panel',
      onClick: () => goTo(`${scopeRoot}/dashboard`)
    },
    {
      name: 'Courses',
      path: `${scopeRoot}/courses`,
      icon: 'graduation-cap',
      onClick: () => goTo(`${scopeRoot}/courses`),
      children: [
        {
          name: 'Add Course',
          path: `${scopeRoot}/courses/edit/new`,
          icon: 'plus',
          onClick: () => goTo(`${scopeRoot}/courses/edit/new`)
        },
        {
          name: 'Explore',
          path: `${scopeRoot}/courses`,
          icon: 'search',
          onClick: () => goTo(`${scopeRoot}/courses`)
        }
      ]
    },
    {
      name: 'Testing',
      path: `${scopeRoot}/testing`,
      icon: 'university',
      onClick: () => goTo(`${scopeRoot}/testing`),
      children: [
        {
          name: 'Quizzes',
          path: `${scopeRoot}/testing/quizzes`,
          icon: 'test',
          onClick: () => goTo(`${scopeRoot}/testing/quizzes`)
        },
        {
          name: 'Practice',
          path: `${scopeRoot}/testing/practice`,
          icon: 'test',
          onClick: () => goTo(`${scopeRoot}/testing/practice`)
        },
        {
          name: 'Exams',
          path: `${scopeRoot}/testing/exams`,
          icon: 'university',
          onClick: () => goTo(`${scopeRoot}/testing/exams`)
        }
      ]
    },
    {
      name: 'Projects',
      path: `${scopeRoot}/projects`,
      icon: 'folder',
      onClick: () => goTo(`${scopeRoot}/projects`),
      children: [
        {
          name: 'In Progress',
          path: `${scopeRoot}/projects?status=wip`,
          icon: 'clock',
          onClick: () => goTo(`${scopeRoot}/projects?status=wip`)
        },
        {
          name: 'Not started',
          path: `${scopeRoot}/projects?status=wip`,
          icon: 'exclamation-circle',
          onClick: () => goTo(`${scopeRoot}/projects?status=wip`)
        },
        {
          name: 'Completed',
          path: `${scopeRoot}/projects?status=wip`,
          icon: 'check-circle',
          onClick: () => goTo(`${scopeRoot}/projects?status=wip`)
        }
      ]
    },
    {
      name: 'Progress',
      path: `${scopeRoot}/profile`,
      icon: 'user-graduate',
      onClick: () => goTo(`${scopeRoot}/profile`),
      children: [
        {
          name: 'Overview',
          path: `${scopeRoot}/profile`,
          icon: 'graduation-cap',
          onClick: () => goTo(`${scopeRoot}/profile`)
        },
        {
          name: 'Certificates',
          path: `${scopeRoot}/profile/certificates`,
          icon: 'certificate',
          onClick: () => goTo(`${scopeRoot}/profile/certificates`)
        }
      ]
    },
    {
      name: 'Settings',
      path: `${scopeRoot}/settings`,
      icon: 'cog',
      onClick: () => goTo(`${scopeRoot}/settings`)
    }
  ]

})

export default SchoolsRouter
