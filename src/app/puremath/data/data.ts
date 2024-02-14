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
      session: " Arithmetic Sequence",
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
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/60404_print-2-4-23.pdf".
        }
        
      ],
    },
    // Add more sessions if needed
  ],
};

