interface Lecture {
  name: string;
  link: string;
}

interface Session {
  session: string;
  lectures: Lecture[];
}

interface SessionsData {
  Sessions: Session[];
}

export const myData: SessionsData = {
  Sessions: [
    {
      session: "Arithmetic Sequence",
      lectures: [
        {
          name: "Explanation part 1",
          link: "https://iframe.mediadelivery.net/play/33074/f022ef5e-c772-4962-82e2-ade0b50dd164",
        },
        {
          name: "Explanation Part 2",
          link: "https://iframe.mediadelivery.net/play/33074/e51b8c4d-a8f1-4dfd-a447-8dc18207d9ba",
        },
        {
          name: "Class&Home Work",
          link: "https://iframe.mediadelivery.net/play/33074/90ac8704-6af6-416a-bff0-b68b4c6c6d9c",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/60404_print-2-4-23.pdf",
        },
        
      ],
    },
    {
      session: "Arithmetic Series",
      lectures: [
        {
          name: "Explanation",
          link: "https://iframe.mediadelivery.net/play/33074/57ece03e-d1be-46da-a0ab-ac30648cb207",
        },
        {
          name: "Class&Home Work",
          link: "https://iframe.mediadelivery.net/play/33074/a46f1355-e6dd-4c06-a807-b53b50ff542b",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/66829_2%20sec%20mathematics-24-35.pdf",
        },
        
      ],
    },{
      session: "Geomitric Sequence",
      lectures: [
        {
          name: "Explanation",
          link: "https://iframe.mediadelivery.net/play/33074/0d406a5d-0646-4dc8-b2d0-8511cfcb2ae6",
        },
        {
          name: "Classwork & HomeWork",
          link: "https://iframe.mediadelivery.net/play/33074/0853aaf1-6dcc-402b-8145-f93d7b877f87",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/38574_2sec.%20Math.%20Session%203.pdf",
        },
        
      ],
    },{
      session: "Geomitric Series",
      lectures: [
        {
          name: "Explanation",
          link: "https://iframe.mediadelivery.net/play/33074/fe8c45d1-3008-4e1c-9cfb-d3d9413bc618",
        },
        {
          name: "Classwork & HomeWork",
          link: "https://iframe.mediadelivery.net/play/33074/5945c261-8188-4a15-870f-1c52976f5094",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/38574_2sec.%20Math.%20Session%203.pdf",
        },
        
      ],
    },
  ],
};