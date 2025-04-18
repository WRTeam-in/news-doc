import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import clsx from "clsx";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocCard({ title, description, to, icon }) {
  return (
    <div className={clsx("col col--3", styles.docCard)}>
      <Link to={to} className={styles.cardLink}>
        <div className="card">
          <div className="card__header">
            <h3>
              {icon} {title}
            </h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <button className="button button--primary button--block">
              Explore
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Complete documentation for the News App ecosystem"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <DocCard
                title="Admin Panel"
                description="Learn how to configure and manage your News Admin Panel"
                to="/docs/admin/installation"
                icon="⚙️"
              />
              <DocCard
                title="Installation"
                description="Step-by-step guides for installing your News Admin Panel"
                to="/docs/installation/install-news-laravel"
                icon="🔧"
              />
              <DocCard
                title="Mobile App"
                description="Customize and set up your News mobile application"
                to="/docs/app/setup"
                icon="📱"
              />
              <DocCard
                title="Web"
                description="Configure and deploy your News web application"
                to="/docs/web/setup"
                icon="🌐"
              />
            </div>
          </div>
        </section>
        <section className={styles.gettingStarted}>
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2 className={styles.centerText}>Ready to Get Started?</h2>
                <p className={styles.centerText}>
                  Explore our comprehensive documentation to set up your
                  complete News ecosystem.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro"
                  >
                    Read Documentation 📚
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
