"use client";

export default function ClassGoal() {
  return (
      <main className="w-[1270px] mt-6  items-center mb-10">
    <div className="w-full  space-y-10">
      {/* CLASS GOAL Section */}
      <div className=" rounded-lg bg-white ">
        
  <h2 className="w-[251px] h-[54px] mb-14 font-extrabold rounded-full text-black border-[2px] text-[30px] flex items-center justify-center">
    CLASS GOAL
  </h2>
        <ul className="space-y-2 text-black font-bold leading-relaxed text-[25px]">
          <li>
            구체적이고 공정한 성과 평가 기준을 수립하고 이를 통해 조직 내 신뢰를 형성한다.
          </li>
          <li>
            - 팀원들의 동기를 유발하고, 성장을 촉진하는 성과관리 전략을 학습한다.
          </li>
        </ul>
      </div>

      {/* Bottom Banner */}
      <div className="flex items-center justify-between p-6 bg-black text-white rounded-lg shadow-md">
        <div>
          <p className="font-semibold mb-1">나를 위한 투자, 지금 이 CLASS로 시작하세요</p>
          <p className="text-sm text-gray-300">
            성장을 위한 꾸준한 노력, 이미 당신은 능력자!
          </p>
        </div>
        <button className="px-5 py-2 mr-14 bg-white text-black rounded-md shadow hover:bg-gray-100 transition">
          CLASS 신청하기
        </button>
      </div>
    </div>
    </main>
  );
}
