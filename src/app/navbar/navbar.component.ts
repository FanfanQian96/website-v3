import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rpia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public readonly navbar = [
    {
      page: '/',
      title: 'Home',
      isDropdown: false
    }, {
      page: null,
      title: 'About Us',
      isDropdown: true,
      dropdownOptions: [
        { page: '/rpia-about', title: 'About RPI Ambulance' },
        { page: '/faq', title: 'FAQs' },
        { page: '/officers', title: 'Officers' },
        { isDivider: true },
        { page: '/5939-about', title: 'Ambulance' },
        { page: '/fr59-about', title: 'First Response' },
        { isDivider: true },
        { page: '/media', title: 'Media' }
      ]
    }, {
      page: '/join',
      title: 'Join Us',
      isDropdown: false
    }, {
      page: null,
      title: 'Outreach',
      isDropdown: true,
      dropdownOptions: [
        { page: '/new-members-training', title: 'New Members' },
        { page: '/cpr-certification', title: 'CPR Certification' },
        { page: '/community', title: 'Community Outreach' }
      ]
    }, {
      page: '/coverage',
      title: 'Request Coverage',
      isDropdown: false
    }, {
      page: '/login',
      title: 'Members',
      isDropdown: false
    }, {
      page: '/contact',
      title: 'Contact Us',
      isDropdown: false
    }, {
      externalLink: 'https://securelb.imodules.com/s/1225/mobile/mobile.aspx?sid=1225&gid=1&pgid=6795&dids=.101&bledit=1&sort=1',
      title: 'Donate',
      isDropdown: false,
      customClass: 'donate'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }
  
  isActive(nav): boolean {
    if (nav.isDropdown) {
      for (const elem of nav.dropdownOptions) {
        if (this.router.url && this.router.url == elem.page) {
          return true;
        }
      }
      return false;
    }
    
    return this.router.url && this.router.url == nav.page;
  }
}
