import * as React from "react"
import SimpleIcon from "../../src/components/simpleIcon"

function TechIcons() {
  return (
    <>
      <p className="mt-0">
        These are some of the technologies I&apos;ve worked with in my career.
      </p>
      <div className="flex flex-col gap-4">
        <h4>Operating Systems</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon slug="linux" label="Linux" fillColor="#000" />
          <SimpleIcon slug="windows" label="Windows" fillColor="#0078D6" />
          <SimpleIcon slug="macos" label="Mac OS" fillColor="#000" />
        </div>

        <h4>Programing Languages</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon slug="c" label="C" fillColor="#A8B9CC" />
          <SimpleIcon slug="cplusplus" label="C++" fillColor="#00599C" />
          <SimpleIcon slug="csharp" label="C Sharp" fillColor="#239120" />
          <SimpleIcon slug="python" label="Python" fillColor="#3776AB" />
          <SimpleIcon
            slug="javascript"
            label="JavaScript"
            fillColor="#F7DF1E"
          />
          <SimpleIcon
            slug="typescript"
            label="TypeScript"
            fillColor="#3178C6"
          />
          <SimpleIcon slug="openjdk" label="Java" fillColor="#000" />
        </div>

        <h4>Frontend</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon slug="html5" label="HTML5" fillColor="#E34F26" />
          <SimpleIcon slug="css3" label="CSS3" fillColor="#1572B6" />
          <SimpleIcon slug="jquery" label="jQuery" fillColor="#0769AD" />
          <SimpleIcon slug="react" label="React" fillColor="#61DAFB" />
          <SimpleIcon slug="mui" label="MUI" fillColor="#007FFF" />

          <SimpleIcon
            slug="tailwindcss"
            label="Tailwind CSS"
            fillColor="#06B6D4"
          />
          <SimpleIcon slug="gatsby" label="Gatsby" fillColor="#663399" />
          <SimpleIcon slug="svelte" label="Svelte" fillColor="#FF3E00" />
        </div>

        <h4>Backend</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon
            slug="springboot"
            label="Spring Boot"
            fillColor="#6DB33F"
          />
          <SimpleIcon slug="fastapi" label="FastAPI" fillColor="#009688" />
          <SimpleIcon slug="docker" label="Docker" fillColor="#2496ED" />
          <SimpleIcon
            slug="kubernetes"
            label="Kubernetes"
            fillColor="#326CE5"
          />
          <SimpleIcon slug="amazonaws" label="Amazon AWS" fillColor="#232F3E" />
          <SimpleIcon
            slug="microsoftazure"
            label="Microsoft Azure"
            fillColor="#0078D4"
          />
          <SimpleIcon slug="mongodb" label="MongoDB" fillColor="#47A248" />
          <SimpleIcon slug="redis" label="Redis" fillColor="#DC382D" />
          <SimpleIcon
            slug="microsoftsqlserver"
            label="Microsoft SQL Server"
            fillColor="#CC2927"
          />
          <SimpleIcon slug="apachekafka" label="Kafka" fillColor="#231F20" />
          <SimpleIcon slug="rabbitmq" label="RabbitMQ" fillColor="#FF6600" />
          <SimpleIcon slug="nodedotjs" label="Node.js" fillColor="#339933" />
        </div>

        <h4>Machine Learning</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon slug="pytorch" label="PyTorch" fillColor="#EE4C2C" />
          <SimpleIcon
            slug="tensorflow"
            label="TensorFlow"
            fillColor="#FF6F00"
          />
          <SimpleIcon slug="keras" label="Keras" fillColor="#D00000" />

          <SimpleIcon
            slug="scikitlearn"
            label="scikit-learn"
            fillColor="#F7931E"
          />
          <SimpleIcon slug="pandas" label="pandas" fillColor="#150458" />
          <SimpleIcon slug="onnx" label="ONNX" fillColor="#005CED" />
        </div>

        <h4>Others</h4>
        <div className="flex flex-wrap gap-3">
          <SimpleIcon slug="git" label="Git" fillColor="#F05032" />
          <SimpleIcon slug="dotnet" label=".NET" fillColor="#512BD4" />
          <SimpleIcon
            slug="apachespark"
            label="Apache Spark"
            fillColor="#E25A1C"
          />
          <SimpleIcon
            slug="databricks"
            label="Databricks"
            fillColor="#FF3621"
          />
          <SimpleIcon slug="espressif" label="Espressif" fillColor="#E7352C" />
          <SimpleIcon slug="opencv" label="OpenCV" fillColor="#5C3EE8" />
          <SimpleIcon slug="cypress" label="Cypress" fillColor="#17202C" />
          <SimpleIcon slug="jest" label="Jest" fillColor="#C21325" />
          <SimpleIcon slug="jenkins" label="Jenkins" fillColor="#D24939" />
          <SimpleIcon
            slug="azuredevops"
            label="Azure DevOps"
            fillColor="#0078D7"
          />
          <SimpleIcon
            slug="powershell"
            label="PowerShell"
            fillColor="#5391FE"
          />
          <SimpleIcon slug="sqlite" label="SQLite" fillColor="#003B57" />
          <SimpleIcon slug="zeromq" label="ZeroMQ" fillColor="#DF0000" />
        </div>
      </div>
    </>
  )
}

export default TechIcons
