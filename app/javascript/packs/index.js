import ReactOnRails from 'react-on-rails';

import Header from '../bundles/Partials/components/Header'

import DashboardIndex from '../bundles/Dashboard/components/Index';

import ProjectsIndex from '../bundles/Account/Projects/components/Index';
import ProjectsShow  from '../bundles/Account/Projects/components/Show';
import ProjectsNew   from '../bundles/Account/Projects/components/New';
import ProjectsEdit  from '../bundles/Account/Projects/components/Edit';

ReactOnRails.register({ Header, DashboardIndex, ProjectsIndex, ProjectsShow, ProjectsNew, ProjectsEdit });
